export default function FormInput({name, register}) {
  return (
    
       <div>
           <label className="label mb-3">{name}</label>
           <input className="input" placeholder={name} {...register(name)}/>
       </div>
  )
}