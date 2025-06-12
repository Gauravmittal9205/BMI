import React from 'react'

export default function Bmiform() {
    const calculateBMI = (event) => {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; 
        if (weight > 0 && height > 0) {
        
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('hei').innerText = height;
        document.getElementById('wei').innerText = weight;
        document.getElementById('bmiResult').innerText = bmi;
        
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        document.getElementById('bmiCategory').innerText = `Category: ${category}`;
        } else {
        alert('Please enter valid weight and height');
        }
    };
  return (
    <>
        <div className="container my-3">
            <h1 className='text-center'>Check Your BMI</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                <input type="number" className="form-control" id="weight" placeholder="Enter your weight" />
            </div>
            <div className="mb-3">
                <label htmlFor="height" className="form-label">Height (cm)</label>
                <input type="number" className="form-control" id="height" placeholder="Enter your height" />
            </div>
                <button type="submit" className="btn btn-primary" onClick={calculateBMI}>Calculate BMI</button>
                    <p className='mt4'>Height: <span id='hei'></span></p>
                    <p className='mt4'>Weight: <span id='wei'></span></p>
                <div>
                    
                    <h2 className='mt-3'>Your BMI is: <span id="bmiResult">0</span></h2>
                    <p id="bmiCategory"></p>
                </div>
            </form>
        </div>
    </>
  )
}
