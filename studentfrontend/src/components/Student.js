import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper,Container,Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StudentTextFields() {
    const[name,setName]=useState('')
    const[adress,setAdress]=useState('')
    const[students,setStudents]=useState([])
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,adress}
        console.log(student)
        fetch("http://localhost:8080/student/add",
        {method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
        }).then(()=>{
            console.log("new Student added")
        })
    }
    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudents(result);
        })
    },[])
  return (
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="StudentName" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="StudentAdress" variant="outlined" fullWidth value={adress} onChange={(e)=>setAdress(e.target.value)}/>
      <Button variant="outlined" startIcon={<DeleteIcon />} >Delete</Button>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>   Send</Button>
    </Box>
    
    </Paper>
    <h1>Students</h1>
    <Paper elevation={3} style={paperStyle}>
      {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
              Id:{student.id}<br></br>
              Name:{student.name}<br></br>
              Adress:{student.adress}
          </Paper>
      ))}
    </Paper>
    </Container>
  );
}
