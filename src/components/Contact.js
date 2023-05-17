import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="contact">
            <h2 class="bold uppercase center">Contact</h2>
            <form action="/form_submit" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" />
                <button type="submit" class="bold uppercase white">Send</button>
            </form>
        </section>
  )
}

export default Contact
