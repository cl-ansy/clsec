import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import * as PP from 'postprocessing'

const addLightingToScene = (scene) => {
  const ambient = new THREE.AmbientLight(0x555555)
  scene.add(ambient)

  const directionalLight = new THREE.DirectionalLight(0xff8c19)
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)

  const orangeLight = new THREE.PointLight(0xcc6600, 30, 450, 1.7)
  orangeLight.position.set(400, 400, 100)
  scene.add(orangeLight)

  const redLight = new THREE.PointLight(0xd8547e, 30, 450, 1.7)
  redLight.position.set(400, 100, 100)
  scene.add(redLight)

  const greenLight = new THREE.PointLight(0x59E817, 30, 450, 1.7)
  greenLight.position.set(100, 100, 100)
  scene.add(greenLight)

  const blueLight = new THREE.PointLight(0x3677ac, 30, 450, 1.7)
  blueLight.position.set(100, 400, 100)
  scene.add(blueLight)

  scene.fog = new THREE.FogExp2(0x23283e, 0.001)
}

const init = (ref) => {
  const { innerWidth, innerHeight } = window
  const renderer = new THREE.WebGLRenderer()
  const composer = new PP.EffectComposer(renderer)
  const scene = new THREE.Scene()
  const loader = new THREE.TextureLoader()
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000)

  camera.position.z = 1
  camera.rotation.x = 1.16
  camera.rotation.y = -0.12
  camera.rotation.z = 0.27

  renderer.setSize(innerWidth, innerHeight)
  ref.current.appendChild(renderer.domElement)

  addLightingToScene(scene)
  renderer.setClearColor(scene.fog.color)

  const bloomEffect = new PP.BloomEffect({
    blendFunction: PP.BlendFunction.COLOR_DODGE,
    kernelSize: PP.KernelSize.SMALL,
    useLuminanceFilter: true,
    luminanceThreshold: 0.5,
    luminanceSmoothing: 0.5,
  })
  bloomEffect.blendMode.opacity.value = 1.5

  loader.load('/nebula/stars.jpg', (texture) => {
    const textureEffect = new PP.TextureEffect({
      blendFunction: PP.BlendFunction.ADD,
      texture: texture,
    })
    textureEffect.blendMode.opacity.value = 0.3
    const effectPass = new PP.EffectPass(camera, bloomEffect, textureEffect)
    effectPass.renderToScreen = true
    composer.addPass(new PP.RenderPass(scene, camera))
    composer.addPass(effectPass)
  })

  const cloudParticles = [], cloudCount = 25
  loader.load('/nebula/smoke-1.png', (texture) => {
    const cloudGeo = new THREE.PlaneBufferGeometry(500, 500)
    const cloudMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
    })

    for (let i=0; i<cloudCount; i++) {
      const cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
      cloud.position.set(Math.random() * 800 - 400, 500, Math.random() * 500 - 500)
      cloud.rotation.x = 1.16
      cloud.rotation.y = -0.12
      cloud.rotation.z = Math.random() * 2 * Math.PI
      cloud.material.opacity = 0.55
      cloudParticles.push(cloud)
      scene.add(cloud)
    }
  })

  const render = () => {
    cloudParticles.forEach(c => c.rotation.z -= 0.0005)
    composer.render(0.1)
    requestAnimationFrame(render)
  }

  render()

  return { camera, renderer }
}

const Nebula = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const ref = mountRef
    const { camera, renderer } = init(ref)

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleWindowResize, false)

    return () => {
      ref.current.removeChild(renderer.domElement)
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ position: 'fixed', zIndex: -1 }}
    />
  )
}

export default Nebula
