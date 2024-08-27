import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  url:any
  shorten(event: { preventDefault: () => void; }) {

    event.preventDefault()

    const inputValue:any = document.getElementById('inputValue')
    const containerUrl:any = document.getElementById('containerUrl')

    this.url = inputValue.value
    containerUrl.style.visibility = "visible"

  }

  copy() {
    const inputValue:any = document.getElementById('inputValue')

    navigator.clipboard.writeText(inputValue.value)

    alert('Value Copied')

  }

}
