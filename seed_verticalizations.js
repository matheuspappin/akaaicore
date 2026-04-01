const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const nichesData = require('./niches.json');
require('dotenv').config({ path: 'apps/web/.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

function getNicheStyling(id) {
  const styling = {
    dentist: { color: 'blue', icon: 'Stethoscope' },
    clinic: { color: 'blue', icon: 'Stethoscope' },
    physio: { color: 'blue', icon: 'Activity' },
    psychology: { color: 'blue', icon: 'Brain' },
    nutrition: { color: 'blue', icon: 'Apple' },
    podiatry: { color: 'blue', icon: 'Footprints' },
    beauty: { color: 'pink', icon: 'Scissors' },
    aesthetics: { color: 'pink', icon: 'Sparkles' },
    barber: { color: 'amber', icon: 'Scissors' },
    spa: { color: 'teal', icon: 'Flower2' },
    tattoo: { color: 'zinc', icon: 'PenTool' },
    tanning: { color: 'orange', icon: 'Sun' },
    auto_detail: { color: 'slate', icon: 'Car' },
    mechanic: { color: 'slate', icon: 'Wrench' },
    car_wash: { color: 'sky', icon: 'Droplets' },
    driving_school: { color: 'slate', icon: 'Car' },
    pet_shop: { color: 'orange', icon: 'Bone' },
    vet: { color: 'emerald', icon: 'Stethoscope' },
    clinic_vet: { color: 'emerald', icon: 'Stethoscope' },
    pet_hotel: { color: 'orange', icon: 'Home' },
    dog_daycare: { color: 'orange', icon: 'Sun' },
    dog_trainer: { color: 'orange', icon: 'Target' },
    tutoring: { color: 'indigo', icon: 'BookOpen' },
    art_studio: { color: 'violet', icon: 'Palette' },
    music_school: { color: 'violet', icon: 'Music' },
    language_school: { color: 'indigo', icon: 'Globe' },
    cooking_school: { color: 'orange', icon: 'ChefHat' },
    photography: { color: 'zinc', icon: 'Camera' },
    photographer: { color: 'zinc', icon: 'Camera' },
    tech_repair: { color: 'blue', icon: 'MonitorSmartphone' },
    plumbing: { color: 'cyan', icon: 'Wrench' },
    electrician: { color: 'yellow', icon: 'Zap' },
    fire_protection: { color: 'red', icon: 'Flame' },
    construction: { color: 'orange', icon: 'HardHat' },
    environmental_compliance: { color: 'emerald', icon: 'Leaf' },
    logistics: { color: 'blue', icon: 'Truck' },
    cleaning: { color: 'sky', icon: 'Sparkles' },
    consulting: { color: 'slate', icon: 'Briefcase' },
    marketing_agency: { color: 'indigo', icon: 'Megaphone' },
    dev_studio: { color: 'slate', icon: 'Code' },
    event_planning: { color: 'fuchsia', icon: 'CalendarDays' },
    party_venue: { color: 'fuchsia', icon: 'PartyPopper' },
    coworking: { color: 'slate', icon: 'Building' },
    real_estate: { color: 'blue', icon: 'Home' },
    insurance: { color: 'blue', icon: 'ShieldCheck' },
    law: { color: 'slate', icon: 'Scale' },
    gym: { color: 'red', icon: 'Dumbbell' },
    boxing: { color: 'red', icon: 'Dumbbell' },
    pilates: { color: 'teal', icon: 'Activity' },
    yoga: { color: 'teal', icon: 'Flower2' },
    martial_arts: { color: 'red', icon: 'Swords' },
    crossfit: { color: 'red', icon: 'Dumbbell' },
    swim_school: { color: 'blue', icon: 'Waves' },
    beach_tennis: { color: 'orange', icon: 'Sun' },
    personal: { color: 'red', icon: 'Dumbbell' },
    sports_center: { color: 'blue', icon: 'Trophy' },
    tailoring: { color: 'slate', icon: 'Scissors' },
    daycare: { color: 'yellow', icon: 'Baby' },
    elderly_care: { color: 'teal', icon: 'Heart' },
    interior_design: { color: 'slate', icon: 'Sofa' },
    wine_club: { color: 'rose', icon: 'Wine' },
    brewery: { color: 'amber', icon: 'Beer' },
    barista: { color: 'amber', icon: 'Coffee' },
    confectionery: { color: 'pink', icon: 'Cake' },
  };
  return styling[id] || { color: 'slate', icon: 'Briefcase' };
}

async function getAdminUser() {
  const { data: users, error } = await supabase.from('users_internal').select('id, role').eq('role', 'super_admin').limit(1);
  if (users && users.length > 0) return users[0].id;
  
  // Fallback to getting the first user
  const { data: anyUser } = await supabase.from('users_internal').select('id').limit(1);
  return anyUser && anyUser.length > 0 ? anyUser[0].id : null;
}

async function main() {
  const skipList = ['dance', 'fire_protection', 'default_generic'];
  const allNiches = Object.keys(nichesData.pt).filter(id => !skipList.includes(id));
  
  console.log(`Encontrados ${allNiches.length} nichos para processar.`);

  const { data: existingVerticals } = await supabase.from('verticalizations').select('slug');
  const existingSlugs = existingVerticals ? existingVerticals.map(v => v.slug) : [];
  
  const userId = await getAdminUser();

  for (const nicheId of allNiches) {
    if (existingSlugs.includes(nicheId)) {
        console.log(`Pular ${nicheId} - já existe no banco`);
        continue;
    }

    const nicheObj = nichesData.pt[nicheId];
    console.log(`Inserindo [${nicheObj.businessModel}] ${nicheId}...`);
    
    const styling = getNicheStyling(nicheId);

    const verticalData = {
      name: nicheObj.name,
      slug: nicheId,
      description: `Gestão inteligente para ${nicheObj.name}`,
      niche: nicheId,
      icon_name: styling.icon,
      icon_color: `text-${styling.color}-500`,
      icon_bg: `bg-${styling.color}-500/20`,
      landing_url: `/solutions/${nicheId}`,
      admin_url: `/admin/verticalizations/${nicheId}`,
      status: 'active',
      tags: [nicheObj.name, nicheObj.businessModel],
      modules: {
        crm: true,
        finance: true,
        pos: true,
        whatsapp: true
      },
      created_by: userId
    };

    const { error } = await supabase.from('verticalizations').insert(verticalData);
    
    if (error) {
        console.error(`❌ Erro ao inserir ${nicheId}:`, error.message);
    } else {
        console.log(`✅ Inserido ${nicheId}`);
    }
  }
}

main().catch(console.error);
