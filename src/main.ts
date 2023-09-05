import './style.css';
import { generateQR } from './qr-code.ts';

const form = document.querySelector<HTMLFormElement>('#form')!;
form.addEventListener('submit', async e => {
  e.preventDefault();
  const input = document.querySelector<HTMLInputElement>('#input')!;
  const value = input.value;
  const QRCode = await generateQR(value);
  document.querySelector<HTMLDivElement>('#qr-code')!.innerHTML = QRCode;
});

const downloadButton =
  document.querySelector<HTMLFormElement>('#download-button')!;

const triggerDownload = (imgURI: string) => {
  let a = document.createElement('a');

  a.setAttribute('download', 'qr-code.svg');
  a.setAttribute('href', imgURI);
  a.setAttribute('target', '_blank');

  a.click();
};

const save = () => {
  const svg = document.querySelector<HTMLFormElement>('svg')!;
  let data = new XMLSerializer().serializeToString(svg);
  let svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
  let url = URL.createObjectURL(svgBlob);

  triggerDownload(url);
};

downloadButton.addEventListener('click', save);

const themeSwitcher =
  document.querySelector<HTMLInputElement>('#theme-switcher')!;

themeSwitcher.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
