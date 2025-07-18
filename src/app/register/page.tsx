"use client";

import "../page.css";
import "../about/about.css";
import "./register.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

  let notificationMessage = "";

  const router = useRouter();

  useEffect(() => {
    const height = document.documentElement.scrollHeight;
    const blur = document.getElementById('reg-bg');
    if (blur instanceof HTMLElement) {
      blur.style.height = `${height}px`;
    }
  }, []);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    interface MemberData {
      [key: string]: string;
    }

    interface idData{
      [key: string]: string;
    }
    
    interface FormOutput {
      email?: string;
      number?: string;
      faculty?: string;
      name?: string;
      members?: MemberData;
      id?: idData | string;
    }
    

    const formOutput: FormOutput = {};


    const email = document.getElementById("email") as HTMLInputElement;

    if (email instanceof HTMLElement) {
      formOutput.email = email.value;
    }

    const number = document.getElementById("number") as HTMLInputElement;

    if (number instanceof HTMLElement) {
      formOutput.number = number.value;
    }

    const faculty = document.getElementById("faculty") as HTMLSelectElement;

    if (faculty instanceof HTMLElement) {
      formOutput.faculty = faculty.value;
    }

    const category = document.getElementById("category") as HTMLSelectElement;

    if (category instanceof HTMLElement) {
      if (category.value === "Hackathon") {

        const members: { [key: string]: string } = {};

        for (let i = 1; i <= 5; i++) {
          const input = document.getElementById(`member${i}`) as HTMLInputElement | null;
        
          if (input && input instanceof HTMLInputElement) {
            members[`member${i}`] = input.value;
          }
        }

        formOutput.members = members;

        const id: { [key: string]: string } = {};

        for (let i = 1; i <= 5; i++) {
          const input = document.getElementById(`id${i}`) as HTMLInputElement | null;
        
          if (input && input instanceof HTMLInputElement) {
            id[`id${i}`] = input.value;
          }
        }

        formOutput.id = id;

        if(formOutput.members.member1 === "" || formOutput.members.member2 === "" || formOutput.members.member3 === "" || formOutput.id.id1 === "" || formOutput.id.id2 === "" || formOutput.id.id3 === "" || formOutput.email === "" || formOutput.number === "" || isNaN(Number(formOutput.number ?? "")) || formOutput.faculty === "" || !formOutput.email?.includes("@")){
          alert("Fill all the details with correct format!");
          return;
        }

        //for hackathon database
        const res = await fetch('http://localhost:3003/hackathon', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formOutput),
        });

        console.log(res);

      }
      else {
        const name = document.getElementById("other-name") as HTMLInputElement;

        if (name instanceof HTMLElement) {
          formOutput.name = name.value;
        }

        const id = document.getElementById("id") as HTMLInputElement;

        if (id instanceof HTMLElement) {
          formOutput.id = id.value;
        }

        if(formOutput.name === "" || formOutput.id == "" || formOutput.email === "" || formOutput.number === "" || isNaN(Number(formOutput.number ?? "")) || formOutput.faculty === "" || !formOutput.email?.includes("@")){
          alert("Fill all the details with correct format!");
          return;
        }

        if (category.value === "Code War") {
          // for codewar database
          const res = await fetch('http://localhost:3003/code-wars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formOutput),
          });

          console.log(res);

        }
        else {
          // for ui/ux database
          const res = await fetch('http://localhost:3003/ui-ux', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formOutput),
          });

          console.log(res);

        }
      }
    }

    router.push("/");
  }

  const chooseCategory = () => {

    const revert = document.getElementById("revert");

    if (revert instanceof HTMLElement) {
      revert.classList.remove("hide");
    }

    const chooseButton = document.getElementById("category-button-id");

    if (chooseButton instanceof HTMLElement) {
      chooseButton.classList.add('hide');

      const category = document.getElementById("category") as HTMLSelectElement;

      if (category instanceof HTMLElement) {
        const cat = category.value;

        if (cat === 'Hackathon') {
          const hackathon = document.getElementById("hackathon-names");

          if (hackathon instanceof HTMLElement) {
            hackathon.classList.remove('hide');
          }
        }
        else {
          const name = document.getElementById("other-name");

          if (name instanceof HTMLElement) {
            name.classList.remove('hide');
          }
        }

        const elements = document.querySelectorAll('.common-class');

        elements.forEach((element) => {
          element.classList.remove("hide");
        });

        const categoryContainer = document.getElementById("category-container");

        if (categoryContainer instanceof HTMLElement) {
          categoryContainer.classList.add("hide");
        }

      }
    }
  }

  const undoCategory = () => {
    const revert = document.getElementById("revert");

    if (revert instanceof HTMLElement) {
      revert.classList.add("hide");
    }

    const chooseButton = document.getElementById("category-button-id");

    if (chooseButton instanceof HTMLElement) {
      chooseButton.classList.remove('hide');

      const category = document.getElementById("category") as HTMLSelectElement;

      if (category instanceof HTMLElement) {
        const cat = category.value;

        if (cat === 'Hackathon') {
          const hackathon = document.getElementById("hackathon-names");

          if (hackathon instanceof HTMLElement) {
            hackathon.classList.add('hide');
          }
        }
        else {
          const name = document.getElementById("other-name");

          if (name instanceof HTMLElement) {
            name.classList.add('hide');
          }
        }

        const elements = document.querySelectorAll('.common-class');

        elements.forEach((element) => {
          element.classList.add("hide");
        });

        const categoryContainer = document.getElementById("category-container");

        if (categoryContainer instanceof HTMLElement) {
          categoryContainer.classList.remove("hide");
        }

      }
    }
  }

  return (
    <div className="body">

      <div className="registration-logo-container">
        <img src="logo.jpg" alt="logo" className="registration-logo" />
        <div className="text-container">
          <div className="head">
            HackFest 2025
          </div>
          <div className="text">
            Registration Form
          </div>
        </div>
      </div>

      <form onSubmit={submitForm} className="form">
        <button type="button" onClick={undoCategory} className="go-back transparent hide" id="revert">
          <IoMdArrowRoundBack className="transparent" />
        </button>
        <div className="flex-container" id="category-container">
          <label htmlFor="category" className="transparent">Enter the Competition Category
            <span className="asterisk transparent">*</span>
          </label>
          <select name="category" id="category" className="select  transparent">
            <option value="Hackathon">Hackathon</option>
            <option value="Code War">Code War</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <button type="button" onClick={chooseCategory} className="submit-category-button" id="category-button-id">Next</button>
        <div className="flex-container hide" id="hackathon-names">
          <label htmlFor="name">Team Members
            <span className="asterisk transparent">*</span>
          </label>
          <div className="transaprent member-container">
            <div className="transparent">Member 1
              <span className="asterisk transparent">*</span>
            </div>
            <input type="text" name="member1" id="member1" className="input transparent" placeholder="Member 1 Name" autoComplete="off"/>
            <input type="text" name="id1" id="id1" className="input transparent" placeholder="Member 1 ID (eg: 7079)" autoComplete="off"/>
          </div>
          <div className="transaprent member-container">
            <div className="transparent">Member 2
              <span className="asterisk transparent">*</span>
            </div>
            <input type="text" name="member2" id="member2" className="input transparent" placeholder="Member 2 Name" autoComplete="off"/>
            <input type="text" name="id2" id="id2" className="input transparent" placeholder="Member 2 ID" autoComplete="off"/>
          </div>
          <div className="transparent member-container">
            <div className="transparent">Member 3
              <span className="asterisk transparent">*</span>
            </div>
            <input type="text" name="member3" id="member3" className="input transparent" placeholder="Member 3 Name" autoComplete="off"/>
            <input type="text" name="id3" id="id3" className="input transparent" placeholder="Member 3 ID" autoComplete="off"/>
          </div>
          <div className="transparent member-container">
            <div className="transparent">Member 4
            </div>
            <input type="text" name="member4" id="member4" className="input transparent" placeholder="Member 4 Name" autoComplete="off" />
            <input type="text" name="id4" id="id4" className="input transparent" placeholder="Member 4 ID" autoComplete="off"/>
          </div>
          <div className="transparent member-container">
            <div className="transparent">Member 5
            </div>
            <input type="text" name="member5" id="member5" className="input transparent" placeholder="Member 5 Name" autoComplete="off" />
            <input type="text" name="id5" id="id5" className="input transparent" placeholder="Member 5 ID" autoComplete="off" />
          </div>
        </div>
        <div className="flex-container hide" id="other-name">
          <label htmlFor="name">Participant Name
            <span className="asterisk transparent">*</span>
          </label>
          <div className="transparent member-container">
          <input type="text" name="name" className="input transparent" placeholder="Enter your name" autoComplete="off"/>
          <input type="text" name="id" id="id" className="input transparent" placeholder="Participants ID (eg: 7079)" autoComplete="off"/>
          </div>
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="email">Email Address
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="email" id="email" className="input" placeholder="Enter your email address" autoComplete="off"/>
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="number">Phone Number
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="number" id="number" className="input" placeholder="Enter your phone number" autoComplete="off"/>
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="faculty">Faculty
            <span className="asterisk transparent">*</span>
          </label>
          <select name="faculty" id="faculty" className="select  transparent">
            <option value="BIT">BIT</option>
            <option value="BIM">BIM</option>
            <option value="BBA">BBA</option>
            <option value="+2">+2</option>
          </select>
        </div>
        <button onSubmit={submitForm} className="submit-form-button hide common-class" type="submit">Submit</button>
      </form>

      <div className="registration-background" id="reg-bg">
      </div>

    </div>
  );
}