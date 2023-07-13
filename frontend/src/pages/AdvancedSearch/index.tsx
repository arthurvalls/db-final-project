import { useForm, SubmitHandler } from "react-hook-form"
import NavBar from "../../components/NavBar"
import './style.css'

type pokemonSearchData = {
  type : string,
  minHealthPoints : number,
  minAttack : number,
  minDefense : number,
  minSpAttack : number,
  minSpDefense : number,
  minSpeed : number
}

function AdvancedSearch() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<pokemonSearchData>();
  
  const onSubmit: SubmitHandler<pokemonSearchData> = (data) => console.log(data);

  console.log(watch()) // watch input value by passing the name of it

  return (
    <div>
        <NavBar/>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)} className='advancedSearchForm'>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="Mínimo de vida" {...register("minHealthPoints")} />
                <input placeholder="Mínimo de attack" {...register("minAttack")} />
                <input placeholder="Mínimo de defense" {...register("minDefense")} />
                <input placeholder="Mínimo de spAttack" {...register("minSpAttack")} />
                <input placeholder="Mínimo de spDefense" {...register("minSpDefense")} />
                <input placeholder="Mínimo de speed" {...register("minSpeed")} />

                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("name", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {/* {errors.name && <span>This field is required</span>} */}
                <label>
                    Type :
                    <select {...register("type", { required: true })}>
                        <option value="Bug">Bug</option>
                        <option value="Dark">Dark</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Electric">Electric</option>
                        <option value="Fairy">Fairy</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Fire">Fire</option>
                        <option value="Flying">Flying</option>
                        <option value="Ghost">Ghost</option>
                        <option value="Grass">Grass</option>
                        <option value="Ground">Ground</option>
                        <option value="Ice">Ice</option>
                        <option value="Normal">Normal</option>
                        <option value="Poison">Poison</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Rock">Rock</option>
                        <option value="Steel">Steel</option>
                        <option value="Water">Water</option>
                    </select>
                </label>
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default AdvancedSearch;