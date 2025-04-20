import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPageComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;

  async onSubmit() {
    if (this.isSubmitting) return;

    try {
      this.isSubmitting = true;

      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message,
        to_email: 'mamsarann1977@gmail.com'
      };

      await emailjs.send(
        'service_ejjo7pi',
        'template_22cee4q',
        templateParams,
        'eR7A2Vqwmw3XraPOe'
      );

      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We will get back to you soon.',
        confirmButtonColor: '#2563eb'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#2563eb'
      });
    } finally {
      this.isSubmitting = false;
    }
  }
}