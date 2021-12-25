package com.DalyCodes.DalyTechSystem.Service;

import com.DalyCodes.DalyTechSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
