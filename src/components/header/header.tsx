import reactLogo from '../../assets/react.svg'
export const Header = () => {
    return (
        <div className="flex justify-between  items-center p-3 mb-5 pl-0">
            <div>
                <div className="flex gap-3 ">
                    <img src={reactLogo} alt="React Logo" width={50}   height={50} />
                    <div>
                        <h1 className="text-4xl text-primary">TaskManager</h1>
                        <code className="mt-2 text-secondary">Éliminez le chaos, suivez le flux.</code>
                    </div>
                </div>
            </div>
            <code className="align-m text-secondary">v.1.0</code>

        </div>
    )
}