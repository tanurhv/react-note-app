import React, { useState }  from 'react'

const Navigation = () => {

    const [counter, setCounter] = useState(0)
    const [idChecker, setIdChecker] = useState(-1)
    const [clickCheck, setClickCheck] = useState(1)

    const mover = (id) => {
        console.log(id)
        if (idChecker === id) {
            setIdChecker(-1)
        } else {
            let dropArray = document.getElementsByClassName('dropdown-menu');
            for (let i = 0; i < dropArray.length; i++) {
                dropArray[i].style.display = 'none';
            }
            setIdChecker(id)
        }
        let dropArray = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropArray.length; i++) {
            if (parseInt(dropArray[i].getAttribute('data-id')) === id) {
                console.log('Matched', i, id)
                let dropDown = dropArray[i]
                let windowWidth = window.innerWidth
                if (counter === 0 || idChecker !== id) {
                    dropDown.style = "display:block;"
                    setCounter(1)
                } else {
                    dropDown.style = "display:none;"
                    setCounter(0)
                    return
                }

                let right = dropDown.getBoundingClientRect().right
                console.log(windowWidth, right)
                if (windowWidth > right) {
                    dropDown.style.right = "auto";
                    console.log('Left')
                } else {
                    dropDown.style.right = "0";
                    console.log('Right')
                }
            }
        }
    }

    const navToggler = () => {
        if (clickCheck === 1) {
            setClickCheck(0)
            document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
        } else {
            setClickCheck(1)
            document.getElementsByTagName('nav')[0].classList.toggle('active-nav')
        }
    }

    return (
        <header className='d-flex justify-between align-items-center'>
            <div className='logo'>Logo</div>
            <div className='menu-toggler' onClick={() => navToggler()}>{clickCheck ? '+' : '-'}</div>
            <nav>
                <span></span>
                <ul>

                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <button onClick={() => mover(0)}>Contact</button>
                        <ul className='dropdown-menu' data-id="0">
                            <li>Address</li>
                            <li>Phone</li>
                            <li>E-Mail</li>
                        </ul>
                    </li>
                    <li>
                        <button onClick={() => mover(1)}>About</button>
                        <ul className='dropdown-menu' data-id="1">
                            <li>T&amp;C</li>
                            <li>Phone</li>
                            <li>E-Mail</li>
                        </ul>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navigation