import FancyText from "./FancyText";
import InspirationGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";

export default function inspire(){
return(
    <div>
        <FancyText title text/>
        <InspirationGenerator>
            <Copyright year={2023} />
        </InspirationGenerator>
    </div>
);
}