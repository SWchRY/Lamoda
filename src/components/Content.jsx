import Search from './Search'
import './Content.css'
import StartFilter from './StartFilter'
import FilterByColor from './FilterByColor'
import FilterByPrice from './FilterByPrice'
import NumOfProduct from './NumOfProducts'
import Products from './Products'

function Content(props){
    return (
    <div className='Content'>
        <Search Set2={props.Set2}/>
        <StartFilter Set1={props.Set1} info={props.info}/>
        <div className='ProductsAndSorting'>
            <div className='Color_Price'>
                <FilterByColor Colors={props.Colors} Set4={props.Set4}/>
                <FilterByPrice Set3={props.Set3}/>
                <NumOfProduct num={props.info.length}/>
            </div>
            <Products Prods={props.info}/>
        </div>
    </div>
    )
}

export default Content