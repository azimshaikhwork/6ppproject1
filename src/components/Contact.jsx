import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>
                    Contact Us
                </h1>
                <form action="">
                    <div>
                        <label htmlFor="">
                            Name:
                        </label>
                        <input type="text" required placeholder='abc' />
                    </div>
                    <div>
                        <label htmlFor="">
                            Email:
                        </label>
                        <input type="email" required placeholder='abc@gmail.com' />
                    </div>
                    <div>
                        <label htmlFor="">
                            Message:
                        </label>
                        <input type="text" required placeholder='Tell us about your Query' />

                    </div>
                    <div className='btn-box'>
                        <button type="submit">Send</button>

                    </div>
                </form>
            </main>
        </div>
    )
}

export default Contact
