import { extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from 'react'
import CustomObject from './CustomObject'

extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
    })

    return <>
        
        <orbitControls args={ [camera, gl.domElement] } />

        <directionalLight position={ [1, 2, 3] } intensity={ 3 } />
        <ambientLight intensity={ 0.5 } />

        <group ref={ groupRef } >
            <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 3 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh rotation-y={ Math.PI * 0.25 } position-x={ -3 } scale={ 1 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange"/>
            </mesh>
        </group>

        <mesh rotation-x={ Math.PI * 1.5 } position-y={ -3 } scale={ 20 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <CustomObject />
    </>
}