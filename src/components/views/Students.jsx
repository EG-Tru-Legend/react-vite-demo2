import { useState, useEffect } from 'react';
import { CardContainer, Card } from "../UI/Card.jsx";
import './Students.scss';

function Students() {
    // Initialisation ----------------------------------------------------
    const newStudent = {
      UserFirstname: "Nathan",
      UserLastname: "Olsson",
      UserEmail: "K9999999@kingston.ac.uk",
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
      "https://images.generated.photos/m8Sph5rhjkIsOiVIp4zbvIuf143F6BWIwhkkY86z2Ms/rs:fit:256:2",
      UserUsertypeName: "Student",
      UserYearName: "2022-23",
    }
    const loggedInUserGroup = 13;
    const apiURL =  "https://softwarehub.uk/unibase/api";
    const myGroupEndPoint = `${apiURL}/users/groups/${loggedInUserGroup}`;

    // State -------------------------------------------------------------
    const [students, setStudents] = useState(null);

    const apiGet = async (endpoint) => {
      const response = await fetch(endpoint);
      const result = await response.json();
      setStudents(result);
    }

    useEffect(() => { apiGet(myGroupEndPoint) }, [myGroupEndPoint]);

    // Handlers ----------------------------------------------------------
    const handleAdd = (student) => {
      student.UserID= Math.floor(10000 * Math.random());
      setStudents([...students,newStudent]);
      console.log(`Length of students: ${students.length}`);
    };

    // View ------------------------------------------------
    return (
        <>
          <h1>Students</h1>
          {
            !students
            ? <p>Loading records ...</p>
            :
            <>
              <CardContainer>
              {
                students.map((student)=> {
                return (
                  <div className='studentCard' key={student.UserID}>
                    <Card>
                      <p>{student.UserEmail.substring(0,8)}</p>
                      <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                      <img 
                        src ={student.UserImageURL}
                        alt={student.UserEmail.substring(0, 8)}
                      />
                    </Card>
                  </div>
                );
              })}
            </CardContainer>
            <button onClick={() => handleAdd(newStudent)}>Add student</button>
            </>
          }
        </>
    );
}

export default Students;