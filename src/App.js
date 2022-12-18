import './App.css';
import Content from './components/Content';
import { useEffect, useState } from 'react'
import generateInfo from './components/GenerateInfo'
import React, { useMemo } from 'react'



function App() {
    const initProducts = useMemo(()=>generateInfo(10),[])
    let allColors = Array.from(new Set(initProducts.map((el) => el.color)))
    const [fn, setFn] = useState()
    let [str, setStr] = useState('')
    let [max, setMax] = useState(9999)
    let [min, setMin] = useState(0)
    let [curColors, setCurColors] = useState([])
    console.log(initProducts[0].id)
    let Prods = useMemo(()=>initProducts.filter((el) => el.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())).filter((el) => el.price < max && el.price > min).filter((el) => curColors.length > 0 ? curColors.includes(el.color) : true).sort(fn),[fn,str,max,min,curColors])
    function SetNewProds(e){
      let contBut = Array.from(document.querySelector('.StartFilter').children)
      let index = contBut.indexOf(e.currentTarget)
      switch(index){
      case 0: 
        contBut.map((el) => el.classList.remove('act'))
        e.currentTarget.classList.add('act')
        setFn(() => (a,b) => a.price - b.price)
        break;
      case 1: 
        contBut.map((el) => el.classList.remove('act'))
        e.currentTarget.classList.add('act')
        setFn(() => (a,b) => -a.price + b.price)
        break;
      case 2: 
        contBut.map((el) => el.classList.remove('act'))
        e.currentTarget.classList.add('act')
        setFn(() => (a,b) => -a.rate + b.rate)
        break;
      default: break;
      }
    }
    function sortByName(){
      let input = document.querySelector('input')
      setStr(input.value)
    }
    function sortByPrice(){
      let firstInput = document.getElementById(777)
      let secondInput = document.getElementById(888)
      console.log(firstInput.value)
      firstInput.value.trim()  == '' ?  setMin(0) : setMin(firstInput.value) 
      secondInput.value.trim() == '' ? setMax(10000) : setMax(secondInput.value) 
    }
    function sortByColor(e){
      let arr = []
      let a = e.currentTarget
      let colors = a.parentElement.parentElement
      for(let i=0;i<colors.children.length;i++){
        colors.children[i].children[0].checked ? arr.push(colors.children[i].children[1].innerText) : console.log('Error')
      }
      setCurColors(arr)
    }
  return (
    <div className="App">
      <Content info={Prods} Set1={SetNewProds} Set2={sortByName} Set3={sortByPrice} Colors={allColors} Set4={sortByColor}/>
    </div>
  );
}

export default App