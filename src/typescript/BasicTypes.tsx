export const BasicTypes = () => {
    const name: string = 'Miguel';
    const names: string[] = ['Miguel', 'Angel', 'Perez'];
    const numbers: number[] = [1, 2, 3, 4, 5];
    return (
        <>
            <h1>Basic Types</h1>
            <h2>{name}</h2>
            <h2>{names.join(', ')}</h2>
            <h2>{numbers.join(', ')}</h2>
        </>
    )
}