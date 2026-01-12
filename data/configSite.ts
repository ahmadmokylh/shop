export default function useSiteConfig() {
  const siteInfo = {
    siteName: 'مناحل الثنيان',
    siteLogo: '/logo.png',
    siteDescription: 'نوفر لكم أجود أنواع العسل الطبيعي.',
    contactPhone: '0501234567',
    contactEmail: 'info@manahil.com',
    contactAddress: 'الكويت، مدينة الكويت',
    defaultCurrency: 'د.ك',
    vatRate: 0.15,
    paymentType: 'credit_card',
  };

  const navLinks = [
    {
      title: 'من نحن',
      url: '/mn-nhn',
    },
    {
      title: 'اتصل بنا',
      url: '/contact-us',
    },
    {
      title: 'التصنيفات',
      url: ' ',
      subLinks: [
        { label: 'العروض', title: 'العروض', url: '/categories/promotions' },
        {
          label: 'العسل العضوي',
          title: 'العسل العضوي',
          url: '/categories/organic-honey',
        },
        {
          label: 'خلطات العسل',
          title: 'خلطات العسل',
          url: '/categories/honey-mixtures',
        },
        {
          label: 'منتجات الخلية',
          title: 'منتجات الخلية',
          url: '/categories/cell-products',
        },
        {
          label: 'منتجات المزرعة',
          title: 'منتجات المزرعة',
          url: '/categories/farm-products',
        },
      ],
    },
  ];

  const socialLinks = {
    facebook: 'https://facebook.com/honeyaithnayan',
    twitter: 'https://x.com/honeyaithnayan',
    instagram: 'https://instagram.com/honeyaithnayan',
  };

  return { siteInfo, navLinks, socialLinks };
}
