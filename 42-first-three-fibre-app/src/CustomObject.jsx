export default function CustomObject() {
    const verticesCount = 10 * 3
    const positions = new Float32Array(verticesCount * 3)

    return <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
    </mesh>
}