import Input from "./Input"
export  default function InputSection({onchange})
{
    return (
        <section id='user-input' className="input-group" >
            <Input onchange={onchange} lableName="DURACTION" name="duration"/>
            <Input onchange={onchange} lableName="EXPECTED RETURN" name="expectedReturn"/>
            <Input onchange={onchange} lableName="ANNUAL  INVESTMENT" name="annualInvestment"/>
            <Input onchange={onchange} lableName="INITIAL INVESTMENT" name="initialInvestment"/>
        </section>
    )
}