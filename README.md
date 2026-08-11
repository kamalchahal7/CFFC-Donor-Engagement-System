# CFFC Donor Engagement System

A donor engagement platform built for Canadian Food for Children (CFFC), a registered charity that ships food and supplies to 18-22 developing countries worldwide.

CFFC's existing donation infrastructure (CanadaHelps portal, Google Form subscriber list) operates passively, with outreach limited to three seasonal newsletters per year. Between those touchpoints, donor engagement drops, creating funding dry spells that directly reduce the number of shipping containers CFFC can fill and send.

This system bridges that gap with three components:
- **Automated email outreach** via SendGrid, delivering regular impact updates and donation prompts to CFFC's subscriber base
- **Donor-facing landing page** providing a clean, focused path to donate through CFFC's existing CanadaHelps portal, accessible via email links and QR codes on physical newsletters
- **Admin dashboard** giving CFFC visibility into email engagement metrics so they can identify declining donor activity before it becomes a funding crisis

Built with FastAPI, React, and SendGrid.