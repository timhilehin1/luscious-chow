export const handleWhatsappOrderClick = (businessPhone: string) => {
    const message = 'Hi'
    const phoneNumber = businessPhone.startsWith('0') ? '+234' + businessPhone.slice(1) : businessPhone
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };