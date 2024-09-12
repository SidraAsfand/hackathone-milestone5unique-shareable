document.getElementById('resumeForm')?.addEventListener('submit', function(event){
  event.preventDefault();
  
  
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

  const nameElement = document.getElementById('name')as HTMLInputElement;
  const lnameElement = document.getElementById('lname')as HTMLInputElement;
  const emailElement = document.getElementById('email')as HTMLInputElement;
  const passwordElement = document.getElementById('password')as HTMLInputElement;
  const phoneElement = document.getElementById('phone')as HTMLInputElement;
  const addressElement = document.getElementById('address')as HTMLInputElement;
  const educationElement = document.getElementById('education')as HTMLInputElement;
  const skillsElement = document.getElementById('skills')as HTMLInputElement;
  const experienceElement = document.getElementById('experience')as HTMLInputElement;


 if( profilePictureInput && passwordElement && nameElement && lnameElement && emailElement&& phoneElement &&  addressElement && educationElement && skillsElement && experienceElement  )
  
{
  const  name = nameElement.value;
  const  lname = lnameElement.value;
  const  email = emailElement.value;
  const  password = passwordElement.value;
  const  phone = phoneElement.value;
  const  address= addressElement.value;
  const  education = educationElement.value;
  const  skills = skillsElement.value;
  const  experience = experienceElement.value;

  //profilePicture

  const profilePictureFile = profilePictureInput.files?.[0]
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



  const resumeHTML= `

  <h1>Resume</h1>
  ${profilePictureURL?`<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ""}
  
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>LastName:</strong> ${lname}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Password:</strong>${password}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>ADDRESS:</strong>${address}</p>
  
  <h3>Education</h3>
  <p>${education}</p>
  
  <h3>Skills</h3>
  <p>${skills}</p>

  <h3>Experience</h3>
  <p>${experience}</p>
  `;



const resumeOutputElement  = document.getElementById("resumeOutput");
if(resumeOutputElement) {
  resumeOutputElement.innerHTML = resumeHTML;
  resumeOutputElement.classList.remove("hidden");

  const buttonsContainer =  document.createElement("div");
  buttonsContainer.id="buttonsContainer";
  resumeOutputElement.appendChild(buttonsContainer);

  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download  as PDF";
  downloadButton.addEventListener("click", () => {
    window.print();
  });
  buttonsContainer.appendChild(downloadButton);

  const shareLinkButton = document.createElement("button");
  shareLinkButton.textContent = "Copy Shareable Link";
  shareLinkButton.addEventListener("click", async () =>{
    try{
      const shareableLink = `https://yourdomain.com/resumes/${name.replace(
        /\s+/g,
        "_"
      )}_cv.html`;

      await navigator.clipboard.writeText(shareableLink);
      alert("Shareable link copied");
    } catch (err) {
      console.error("failed to copy Link", err);
      alert("Failed  to copy link.please try again.");
    }
  });
  buttonsContainer.appendChild(shareLinkButton);
}  else {
  console.error("Resume output container not found");
}
}
else {
  console.error("Form elements are missing");
}
});
