import StucleCard from "../Components/StucleCard"

function StucleHome() {



  return (
    <div className="px-2">
        <div className="px-3 py-1 text-xl flex divide-x divide-dashed divide-white/20 items-center gap-3 bg-white/20 backdrop-blur-md rounded-sm mx-3 my-5">
            <div className="flex items-center gap-1 ">
                <span className="material-icons-outlined text-sm">edit</span>  
                <p className="text-base font-medium">Assam 28</p>
            </div>
            <span className="material-icons-outlined text-xl px-3">person_add</span>            
        </div>
        
        <div className="m-2 grid grid-cols-8 gap-7 place-content-center place-items-center">
            <StucleCard name="raghu" names={"Raghavendra S Bhat"} />
            <StucleCard name="raghu" names={"Krishnamurthy Hegde"}/>
            <StucleCard name="raghu" names={"Sudarshan Prakash Devarukhkar Ayala"}/>
            <StucleCard name="raghu" names={"Bhageerathi Bajpeyi"}/>
            <StucleCard name="raghu" names={"Lasya Chattarak"}/>
            <StucleCard name="raghu" names={"Durgautti Padagavakar"}/>
            <StucleCard name="raghu" names={"Catherine Vera"}/>
            <StucleCard name="raghu" names={"Madeleine Mcintyre"}/>
            <StucleCard name="raghu" names={"Taurus Bluebeard"}/>
            <StucleCard name="raghu" names={"Jayadeva Khamavant"}/>
        </div>
        

    </div>
  )
}

export default StucleHome