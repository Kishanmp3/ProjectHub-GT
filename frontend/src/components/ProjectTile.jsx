const tagColors = {
  Javascript: { backgroundColor: "#f7df1e", textColor: "#000000" },
  HTML: { backgroundColor: "#e34c26", textColor: "#ffffff" },
  CSS: { backgroundColor: "#264de4", textColor: "#ffffff" },
  React: { backgroundColor: "#61dafb", textColor: "#000000" },
  NodeJS: { backgroundColor: "#68a063", textColor: "#ffffff" },
  Python: { backgroundColor: "#3776ab", textColor: "#ffffff" },
  Django: { backgroundColor: "#092e20", textColor: "#ffffff" },
  Flask: { backgroundColor: "#000000", textColor: "#ffffff" },
  Java: { backgroundColor: "#b07219", textColor: "#ffffff" },
  Ruby: { backgroundColor: "#cc342d", textColor: "#ffffff" },
  Rails: { backgroundColor: "#d30001", textColor: "#ffffff" },
  PHP: { backgroundColor: "#777bb4", textColor: "#ffffff" },
  MySQL: { backgroundColor: "#4479a1", textColor: "#ffffff" },
  PostgreSQL: { backgroundColor: "#336791", textColor: "#ffffff" },
  MongoDB: { backgroundColor: "#47a248", textColor: "#ffffff" },
  AWS: { backgroundColor: "#ff9900", textColor: "#000000" },
  Firebase: { backgroundColor: "#ffca28", textColor: "#000000" },
  Git: { backgroundColor: "#f05032", textColor: "#ffffff" },
  GitHub: { backgroundColor: "#181717", textColor: "#ffffff" },
  Docker: { backgroundColor: "#2496ed", textColor: "#ffffff" },
  Kubernetes: { backgroundColor: "#326ce5", textColor: "#ffffff" },
  Azure: { backgroundColor: "#0078d4", textColor: "#ffffff" },
  GCP: { backgroundColor: "#4285f4", textColor: "#ffffff" },
  Linux: { backgroundColor: "#fcc624", textColor: "#000000" },
  TensorFlow: { backgroundColor: "#ff6f00", textColor: "#000000" },
  Keras: { backgroundColor: "#d00000", textColor: "#ffffff" },
  PyTorch: { backgroundColor: "#ee4c2c", textColor: "#ffffff" },
  Redis: { backgroundColor: "#dc382d", textColor: "#ffffff" },
  GraphQL: { backgroundColor: "#e535ab", textColor: "#ffffff" },
  TypeScript: { backgroundColor: "#3178c6", textColor: "#ffffff" },
  Svelte: { backgroundColor: "#ff3e00", textColor: "#ffffff" },
  Vue: { backgroundColor: "#42b883", textColor: "#ffffff" },
  Angular: { backgroundColor: "#dd0031", textColor: "#ffffff" },
  jQuery: { backgroundColor: "#0769ad", textColor: "#ffffff" },
  Bootstrap: { backgroundColor: "#7952b3", textColor: "#ffffff" },
  Swift: { backgroundColor: "#fa7343", textColor: "#ffffff" },
  Kotlin: { backgroundColor: "#0095d5", textColor: "#ffffff" },
  Rust: { backgroundColor: "#dea584", textColor: "#000000" },
  CSharp: { backgroundColor: "#239120", textColor: "#ffffff" },
  CPlusPlus: { backgroundColor: "#00599c", textColor: "#ffffff" },
  Matlab: { backgroundColor: "#0076a8", textColor: "#ffffff" },
  R: { backgroundColor: "#276dc3", textColor: "#ffffff" },
  Go: { backgroundColor: "#00add8", textColor: "#ffffff" },
  Scala: { backgroundColor: "#dc322f", textColor: "#ffffff" },
  Flutter: { backgroundColor: "#02569b", textColor: "#ffffff" },
};

const ProjectTile = ({ placeholder }) => {
  return (
    <div className="bg-surface-200 text-white rounded w-full overflow-hidden">
      <div className="flex flex-col px-3 py-4">
        {/* <img
        src="src/assets/DefaultTile.png"
        className="w-full h-40 object-cover"
        alt="project picture"
      /> */}

        <div
          className="w-full h-40 bg-yellow-400 rounded"
          alt="project picture"
        />
        <div className="px-1 pt-3 py-4 gap-y-5 flex flex-col">
          <div className="flex flex-col">
            <h4>CAD startup</h4>
            <div className="flex gap-x-2 items-center">
              <div className="rounded-full bg-surface-500 h-5 w-5 aspect-square" />
              <p>Joe Mama</p>
            </div>
          </div>
          <p>
            Hi I am building a Cad startup where we hope to revolutionize cad
            for bme majors
          </p>
          <div className="flex gap-x-2 items-center">
            <span
              className={`py-1 px-3 rounded-full text-xs font-bold cursor-default`}
              style={{
                backgroundColor: tagColors["Javascript"].backgroundColor,
                color: tagColors["Javascript"].textColor,
              }}
            >
              Javascript
            </span>
            <span
              className="py-1 px-3 bg-green-400 rounded-full text-xs font-bold"
              style={{
                backgroundColor: tagColors["React"].backgroundColor,
                color: tagColors["React"].textColor,
              }}
            >
              React
            </span>
            <span
              className="py-1 px-3 bg-green-400 rounded-full text-xs font-bold"
              style={{
                backgroundColor: tagColors["Bootstrap"].backgroundColor,
                color: tagColors["Bootstrap"].textColor,
              }}
            >
              Bootstrap
            </span>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-2">
        <div>
          <h4>Cad Startup</h4>
          <div className="felx justify-between">
            <div>
              <p className="w-80 h-1 ml-20 rounded bg-primary-200" />
              <p className="text-lg font-semibold ml-20 whitespace-pre">
                Kishan Patel 3rd Year BME
              </p>
              <p className="w-80 h-1 ml-20 rounded bg-primary-200" />
              <p className="text-sm font-normal ml-20 text-wrap">
                “Hi I am building a Cad startup where we hope to revolutionize
                cad for bme majors”
              </p>
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
      </div> */}
    </div>
  );
};

export default ProjectTile;
