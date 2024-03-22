const student_create_form = document.getElementById("student_create_form");
const student_data_list = document.getElementById("student_data_list");
const msg = document.querySelector(".msg");

// Show All Students Data
const getAllStudents = () => {
  const students = getDataLS("students");
  let dataList;
  if (students) {
      students.forEach((item, index)=>{
        dataList += `
          <tr>
            <td>1</td>
            <td>${item.name}</td>
            <td><img src="${item.photo}" alt=""></td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.location}</td>
            <td>${timeAgo(item.createdAt)}</td>
            <td>
                <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#student_show"><i class="fa-solid fa-eye"></i></button>
                <button class="btn btn-sm btn-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `;
      });
  } else {
    dataList = `
      
    `;
  }
  student_data_list.innerHTML = dataList;
};
getAllStudents();



// Now submit student create form
student_create_form.onsubmit = (event) => {
  event.preventDefault();

  // get form data
  const form_data = new FormData(event.target);
  const { name, photo, email, phone, location } = Object.fromEntries(form_data);

  // form validation

    if(!name || !photo || !email || !phone || !location){
        msg.innerHTML = createAlert("All fields are required!");
    } else if(!isEmail(email)){
        msg.innerHTML = createAlert("Invalid email address!","warning");
    } else if (!isMobile(phone)) {
      msg.innerHTML = createAlert("Invalid Mobile Number!", "warning");
    }else{
        sendDataLS("students", {
          id: createUniqueId(), 
          name,
          email,
          phone,
          location,
          photo,
          createdAt: Date.now(),
        });
        msg.innerHTML = createAlert("Student data created", "success");
        event.target.reset();
        getAllStudents();
    }


};