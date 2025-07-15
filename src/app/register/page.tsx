"use client";

import "../page.css";
import "../about/about.css";
import "./register.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Page() {

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    let formOutput: { [key: string]: string | object } = {};

    const email = document.getElementById("email") as HTMLInputElement;

    if (email instanceof HTMLElement) {
      formOutput.email = email.value;
    }

    const number = document.getElementById("number") as HTMLInputElement;

    if (number instanceof HTMLElement) {
      formOutput.number = number.value;
    }

    const faculty = document.getElementById("faculty") as HTMLInputElement;

    if (faculty instanceof HTMLElement) {
      formOutput.faculty = faculty.value;
    }

    const category = document.getElementById("category") as HTMLSelectElement;

    if (category instanceof HTMLElement) {
      if (category.value === "Hackathon") {

        let members: { [key: string]: string } = {};

        const member1 = document.getElementById("member1") as HTMLInputElement;

        if (member1 instanceof HTMLElement) {
          members.member1 = member1.value;
        }

        const member2 = document.getElementById("member2") as HTMLInputElement;

        if (member2 instanceof HTMLElement) {
          members.member2 = member2.value;
        }

        const member3 = document.getElementById("member3") as HTMLInputElement;

        if (member3 instanceof HTMLElement) {
          members.member3 = member3.value;
        }

        const member4 = document.getElementById("member4") as HTMLInputElement;

        if (member4 instanceof HTMLElement) {
          members.member4 = member4.value;
        }

        const member5 = document.getElementById("member5") as HTMLInputElement;

        if (member5 instanceof HTMLElement) {
          members.member5 = member5.value;
        }

        formOutput.members = members;
        //for hackathon database
        const res = await fetch('', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formOutput),
        });

      }
      else {
        const name = document.getElementById("other-name") as HTMLInputElement;

        if (name instanceof HTMLElement) {
          formOutput.name = name.value;
        }

        if (category.value === "Code War") {
          //for codewar database
          const res = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formOutput),
          });

        }
        else {
          //for ui/ux database
          const res = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formOutput),
          });

        }
      }
    }
  }

  const chooseCategory = () => {

    const revert = document.getElementById("revert");

    if(revert instanceof HTMLElement){
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

  const undoCategory = () =>{
    const revert = document.getElementById("revert");

    if(revert instanceof HTMLElement){
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
        <button onClick={undoCategory} className="go-back transparent hide" id="revert">
          <IoMdArrowRoundBack className="transparent"/>
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
        <button onClick={chooseCategory} className="submit-category-button" id="category-button-id">Next</button>
        <div className="flex-container hide" id="hackathon-names">
          <label htmlFor="name">Team Members
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="member1" id="member1" className="input" placeholder="Member 1" autoComplete="off" />
          <input type="text" name="member2" id="member2" className="input" placeholder="Member 2" autoComplete="off" />
          <input type="text" name="member3" id="member3" className="input" placeholder="Member 3" autoComplete="off" />
          <input type="text" name="member4" id="member4" className="input" placeholder="Member 4" autoComplete="off" />
          <input type="text" name="member5" id="member5" className="input" placeholder="Member 5" autoComplete="off" />
        </div>
        <div className="flex-container hide" id="other-name">
          <label htmlFor="name">Participant Name
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="name" className="input" placeholder="Enter your name" autoComplete="off" />
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="email">Email Address
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="email" id="email" className="input" placeholder="Enter your email address" autoComplete="off" />
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="number">Phone Number
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="number" id="number" className="input" placeholder="Enter your phone number" autoComplete="off" />
        </div>
        <div className="flex-container hide common-class">
          <label htmlFor="faculty">Faculty
            <span className="asterisk transparent">*</span>
          </label>
          <input type="text" name="faculty" id="faculty" className="input" placeholder="Enter your faculty" autoComplete="off" />
        </div>
        <button onClick={submitForm} className="submit-form-button hide common-class" type="submit">Submit</button>
      </form>

      <div className="registration-background">
      </div>

    </div>
  );
}