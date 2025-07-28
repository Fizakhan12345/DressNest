import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
faqs = [
 {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 14 days of delivery, provided the item is unused, in original packaging and with all tags intact. Returns are free for first-time exchanges.',
    category: 'Returns & Refunds',
    expanded: false
  },
  {
    question: 'Can I exchange an item?',
    answer:
      'Yes. Exchange requests must be raised within 14 days of delivery. We arrange a free pick‑up for the first exchange; subsequent exchanges may attract a ₹99 shipping fee.',
    category: 'Returns & Refunds',
    expanded: false
  },
  {
    question: 'When will I receive my refund?',
    answer:
      'Once your return is approved, we initiate the refund within 48 hours. Per RBI guidelines, funds reflect in your original payment method in 7 ‑ 10 banking days.',
    category: 'Returns & Refunds',
    expanded: false
  },
  {
    question: 'What should I do if I receive a damaged or defective item?',
    answer:
      'Click a clear photo and raise a “Defective item” request in My Orders within 48 hours of delivery. We will arrange a free replacement or full refund.',
    category: 'Returns & Refunds',
    expanded: false
  },

  /* ---------- ORDERS & DELIVERY ---------- */
  {
    question: 'How long does it take to receive my order?',
    answer:
      'Metro cities: 2‑4 business days. Non‑metro & tier‑II/III towns: 4‑7 business days. Remote pin‑codes can take up to 10 days.',
    category: 'Orders & Delivery',
    expanded: false
  },
  {
    question: 'Do you charge for shipping within India?',
    answer:
      'Shipping is FREE on prepaid orders ≥ ₹999. Orders below that value or Cash‑on‑Delivery (COD) attract a flat ₹49 shipping fee.',
    category: 'Orders & Delivery',
    expanded: false
  },
  {
    question: 'Will I receive a tracking number?',
    answer:
      'Yes. As soon as we dispatch your parcel you’ll receive an SMS + email with the AWB number and a live‑tracking link.',
    category: 'Orders & Delivery',
    expanded: false
  },
  {
    question: 'Do you deliver PAN‑India?',
    answer:
      'We ship to 27,000+ pin codes across India via Bluedart, Delhivery, and India Post. COD is available at most serviceable pin codes.',
    category: 'Orders & Delivery',
    expanded: false
  },

  /* ---------- PAYMENTS, TAX & PRICING ---------- */
  {
    question: 'Are prices inclusive of GST?',
    answer:
      'Yes. All product prices shown on our website are GST‑inclusive. A GST invoice will be emailed to you once the order ships.',
    category: 'Payments',
    expanded: false
  },
  {
    question: 'Do you offer Cash‑on‑Delivery?',
    answer:
      'COD is available for orders up to ₹8,000. Please keep exact cash ready; delivery partners may not carry change.',
    category: 'Payments',
    expanded: false
  },

  /* ---------- CANCELLATIONS & MODIFICATIONS ---------- */
  {
    question: 'Can I cancel or modify my order after placing it?',
    answer:
      'Orders can be cancelled or edited (size / address) within 60 minutes of placement or until they move to “Packed” status—whichever is earlier.',
    category: 'Cancellations',
    expanded: false
  },

  /* ---------- WARRANTY & SUPPORT ---------- */
  {
    question: 'Do your products come with a warranty?',
    answer:
      'Apparel carries a 30‑day stitching warranty. Electronics and lighting products include a 6‑month manufacturer warranty. Please retain the invoice as proof of purchase.',
    category: 'Warranty',
    expanded: false
  },

  /* ---------- PRIVACY & DATA ---------- */
  {
    question: 'How is my personal data stored?',
    answer:
      'We comply with the IT Act 2000 + 2021 Intermediary Rules. Data is encrypted at rest (AES‑256) and never sold to third‑parties.',
    category: 'Privacy & Data',
    expanded: false
  },

  /* ---------- GRIEVANCE REDRESSAL ---------- */
  {
    question: 'Who is your Grievance Officer under the Consumer Protection Rules 2020?',
    answer:
      'Grievance Officer: Ms. Aditi Sharma<br>Email: grievance@trendyvastra.com<br>Phone: +91‑22‑4890‑4585<br>Office hours: Mon‑Fri 10 AM – 6 PM (IST)',
    category: 'Legal',
    expanded: false
  }
  ];

  togglePanel(index: number) {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}
