import React from 'react';
import './style.css'



const Form = () => {
    return (
        <div className="form-group">
            <form>
                <label for="inputEmail" className="form-label" >Email</label>
                <input className="form-control is-valid" type= "email" placeholder="jhondoe@example.com"  required />
                <div className="valid-feedback">Good! Your email address looks valid.</div>
                <br/>

                <label for="inputEmail" className="form-label" >username</label>
                <input className="form-control is-valid" type= "text" placeholder="USERNAME"  required />
                <div className="valid-feedback">Good! Your USERNAME  looks valid.</div>
                <br/>
                <div>
                

                <select className="form-control form-control-sm">
                    
    <option>MALE</option>
    <option>FEMALE</option>
    
    </select>
    </div>
        

                <div className="form-group1">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control is-invalid"  placeholder="Password" required/>
                <div className="invalid-feedback">Opps! You have entered an invalid password.</div>
                <div className="form-group2">
                <label className="form-check-label"></label>
                <br/>
                <input className="form-input" type="checkbox"/> Remember me
                <div>
                    <br/>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </div>
                </div>
                <div className="form-group2">
        <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
            
        </div>


    )
}

export default Form;