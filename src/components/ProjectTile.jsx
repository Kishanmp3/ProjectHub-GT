

const ProjectTile = ({ placeholder }) => {
    return (
        <div className="bg-surface-200 text-white rounded-tile object-none">
            <img src="src/assets/DefaultTile.png" className="w-screen h-56 object-cover rounded-tile mb-4" />
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h1 className="text-6xl font-bold ml-20">Cad Startup</h1>
                    <div className="felx justify-between">
                        <div>
                            <p className="w-80 h-1 ml-20 rounded bg-primary-200" />
                            <p className="text-lg font-semibold ml-20 whitespace-pre">Kishan Patel                      3rd Year BME</p>
                            <p className="w-80 h-1 ml-20 rounded bg-primary-200" />
                            <p className="text-sm font-normal ml-20 text-wrap">“Hi I am building a Cad startup where we hope to revolutionize cad for bme majors”</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center text-lg font-semibold">
                        <ul className="list-disc space-y-2 marker:text-primary-200">
                            <li>Bio Medical Engineering</li>
                            <li>3-4 Weekly Hours</li>
                            <li>Skills: Cad, BME, Hardware</li>
                            <li>Start: October 30th</li>
                            <li>3-5 Engineers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ProjectTile;