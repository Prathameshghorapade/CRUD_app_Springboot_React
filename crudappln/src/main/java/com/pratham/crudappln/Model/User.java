package com.pratham.crudappln.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    private int id;
    private String name;
    private int age;
    private String dept;
}
