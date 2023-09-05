import QRCode from 'qrcode';

export const generateQR = async (text: string) => {
  console.log('🚀 Generating QR Code...');
  try {
    const QRCodeString = await QRCode.toString(text, {
      errorCorrectionLevel: 'L',
      margin: 1
    });
    console.log('🚀 QR Code generated!');
    return QRCodeString;
  } catch (err) {
    console.log('❌ QR Code generation failed!');
    console.error(err);
    return '';
  }
};
