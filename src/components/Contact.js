import React from 'react'

const Contact = () => {


  return (

// Simple contact form

    <section id="contact" class="contact">

      {/* Create an 'h2' tag for the section's title, with the classes 'bold', 'uppercase', and 'center'. */}
      <h2 class="bold uppercase center">Contact</h2>

      {/* Create a form with an action attribute pointing towards the '/form_submit' endpoint and using the POST method to submit data. */}
      <form action="/form_submit" method="POST">

        {/* Create an input label with the text 'Name', and associate it with the input below using the 'for' attribute. */}
        <label for="name">Name</label>

        {/* Create a text input with an id and a name attribute of 'name'. Associate with label above with the 'id attribute' */}
        <input type="text" id="name" name="name" />

        {/* Create an input label with the text 'Email', and associate it with the input using the 'for' attribute. */}
        <label for="email">Email</label>

        {/* Create an email input with an id and a name attribute of 'email'. Associate with label above with the 'id attribute' */}
        <input type="email" id="email" name="email" />

        {/* Create an input label with the text 'Message', and associate it with the textarea using the 'for' attribute. */}
        <label for="message">Message</label>

        {/* Create a textarea with an id and a name attribute of 'message' and with 4 rows. Users can write their messages in this textarea. Associate with label above with the 'id attribute' */}
        <textarea id="message" name="message" rows="4" />

        {/* Create a submit button with the text 'Send', and the classes 'bold', 'uppercase', and 'white'. */}
        <button type="submit" class="bold uppercase white">Send</button>

      </form>
    </section>
  )
}

export default Contact;