const fs = require('fs');
let content = fs.readFileSync('src/data/content.ts', 'utf8');

const newProblems = `export const PROBLEM_CARDS = [
  {
    title: 'Outdated Web Design',
    desc: 'Websites that look like they were built 10 years ago, frustrating users and actively hurting your conversion rates.',
    icon: 'Layout',
  },
  {
    title: 'Rigid Off-The-Shelf Software',
    desc: 'Forcing your unique business processes into restrictive SaaS tools because you lack custom development.',
    icon: 'Code2',
  },
  {
    title: 'Hidden Unstructured Data',
    desc: 'Sitting on mountains of PDFs and emails without the AI capability to query, extract, or make sense of the data.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Copying data between systems',
    desc: 'Taking customer information from an email and manually re-entering it into a CRM, spreadsheet, or invoicing tool.',
    icon: 'CopyCheck',
  },
  {
    title: 'Chasing enquiries & quotes',
    desc: 'Letting warm commercial leads go cold because someone did not have time to send a follow-up email.',
    icon: 'Clock',
  },
  {
    title: 'Sending repetitive emails',
    desc: 'Typing the same onboarding instructions, booking confirmations, or status updates dozens of times a week.',
    icon: 'MailCheck',
  },`;

content = content.replace(`export const PROBLEM_CARDS = [
  {
    title: 'Copying data between systems',
    desc: 'Taking customer information from an email and manually re-entering it into a CRM, spreadsheet, or invoicing tool.',
    icon: 'CopyCheck',
  },
  {
    title: 'Chasing enquiries & quotes',
    desc: 'Letting warm commercial leads go cold because someone did not have time to send a follow-up email.',
    icon: 'Clock',
  },
  {
    title: 'Sending repetitive emails',
    desc: 'Typing the same onboarding instructions, booking confirmations, or status updates dozens of times a week.',
    icon: 'MailCheck',
  },`, newProblems);

fs.writeFileSync('src/data/content.ts', content);
