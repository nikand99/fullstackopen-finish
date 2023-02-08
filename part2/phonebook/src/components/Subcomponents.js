const Course = ({course}) => {

    const initialValue = 0; 
  
    const total = course.parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      initialValue
    );
    
    console.log("total: ", total);
    return (
      <div>
        <h1 key={course.id}> {course.name}</h1> 
        {course.parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }

  export default Course
