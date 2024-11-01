let studentScore

function gradeCalculation(score){

    switch (true)
    {
        case (score == 100): { 
            console.log("The Student grade is A++")
            break
        }
        case (score < 100 && score >=95): { 
            console.log("The Student grade is A+")
            break
        }
        case (score < 95 && score >=90): { 
            console.log("The Student grade is A")
            break
        }
        case (score < 90 && score >=80): { 
            console.log("The Student grade is B+")
            break
        }

        case ('score < 80 && score >=70'): { 
            console.log("The Student grade is B")
            break
        }
        case (score < 70 && score >=55): { 
            console.log("The Student grade is C")
            break
        }

        case (score < 55 && score >=35): { 
            console.log("The Student grade is D")
            break
        }

        case (score < 35 && score >=0): { 
            console.log("The Student grade is E")
            break
        }

        default: {
            console.log("Enter valid student score")
        }
        }
    }
    gradeCalculation(100)
    gradeCalculation(97)
    gradeCalculation(93)
    gradeCalculation(83)
    gradeCalculation(67)
    gradeCalculation(45)
    gradeCalculation(23)
    gradeCalculation(-9)