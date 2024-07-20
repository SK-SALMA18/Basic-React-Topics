import React from "react";
function FormExample(){
    return(
        <form className="form">
            <h2 style={{textAlign:"center"}}>FORM</h2>
            <label>Enter Your Name:
                <input type="text"/>
            </label><br/><br/>
            <label>Enter Your Age:
                <input type="number"/>
            </label><br/><br/>
            <label>Enter Your Email:
                <input type="text"/>
            </label><br/><br/>
            <label>Enter Your PhoneNumber:
                <input type="number"/>
            </label><br/><br/>
            <label for="Gender">Enter Your Gender:
                <input type="radio" name="Gender"/>Female
                <input type="radio" name="Gender"/>male
            </label><br/><br/>
            <label for="checkbox">Enter Your Hobbies:
                <input type="checkbox" Cooking/>Cooking
                <input type="checkbox" Dancing/>Dancing
                <input type="checkbox" Reading/>Reading
                <input type="checkbox" Others/>Others
            </label><br/><br/>
            <label for="address">Enter Your Address:
                <textarea id="Address" name="address" rows="5" cols="50"></textarea>
            </label><br/><br/>
            <label>Select Your Education:
            <select>
                <option value="mba">MBA</option>
                <option value="mca">MCA</option>
                <option value="b.tech">B.Tech</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Dipolma">Dipolma</option>
                <option value="SSC">SSC</option>
            </select>
            </label><br/><br/>
            <input type="submit" value="Submit"></input>
            <input type="reset" value="Reset"></input>
        </form>
    )
}
export default FormExample;