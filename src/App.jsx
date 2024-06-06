import './App.scss'

function App() {
  const loggedInUser = "Eesa";
  const modulelist = [
    {
      ModuleID: 1,
      ModuleName: "Games Programming",
      ModuleCode: "CI2270",
      ModuleLevel: 4,
      ModuleLeaderID: 1,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg"
    },
    {
      ModuleID: 2,
      ModuleName: "Individual Project",
      ModuleCode: "CI7446",
      ModuleLevel: 7,
      ModuleLeaderID: 2,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg"
    },
    {
      ModuleID: 3,
      ModuleName: "Database Driven Web Applications",
      ModuleCode: "CI6388",
      ModuleLevel: 6,
      ModuleLeaderID: 3,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg"
    },
    {
      ModuleID: 4,
      ModuleName: "Advanced Data Modelling",
      ModuleCode: "CI8502",
      ModuleLevel: 6,
      ModuleLeaderID: 4,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg"
    },
    {
      ModuleID: 5,
      ModuleName: "Ethical Hacking",
      ModuleCode: "CI7572",
      ModuleLevel: 7,
      ModuleLeaderID: 5,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg"
    },
    {
      ModuleID: 6,
      ModuleName: "Network and Mobile Forensics",
      ModuleCode: "CI5068",
      ModuleLevel: 7, 
      ModuleLeaderID: 6, 
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg"
    },
    {
      ModuleID: 7,
      ModuleName: "Practical Data Analyst Skills",
      ModuleCode: "CI9213",
      ModuleLevel: 5,
      ModuleLeaderID: 7,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg"
    },
    {
      ModuleID: 8,
      ModuleName: "Statistics in Practice",
      ModuleCode: "CI5856",
      ModuleLevel: 7,
      ModuleLeaderID: 8,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg"
    },
    {
      ModuleID: 9,
      ModuleName: "Internet Services and Protocols",
      ModuleCode: "CI3651",
      ModuleLevel: 7,
      ModuleLeaderID: 9,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg"
    },
    {
      ModuleID: 10,
      ModuleName: "High Level Game Development",
      ModuleCode: "CI7952",
      ModuleLevel: 5,
      ModuleLeaderID: null,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg"
    }
  ];

  return (
    <div className="layout">
      <header>
        <h1>Basic React Demo</h1>
        <p className="welcome">Welcome {loggedInUser}</p>
      </header>

      <nav>
        <div className="navItem">
          <a to="/">Home</a>
        </div>

        <div className="navItem">
          <a to="/modules">Modules</a>
        </div>

        <div className="navItem">
          <a to="/students">Students</a>
        </div>
      </nav>

      <main>
        <h1>Modules</h1>
        <div className="cardContainer">
        {
          modulelist.map((module)=>{
            return(
            <div className="card" key={module.ModuleCode}>
              <p>{module.ModuleCode}</p>
              <p>{module.ModuleName}</p>
              <img src ={module.ModuleImageURL}/>
            </div>
            )
          })
        }
        </div>
      </main>

      <footer>
        <p className="thankyou">Thank You For Using This System!</p>
      </footer>

    </div>
  )
}

export default App
