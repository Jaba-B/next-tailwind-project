import Image from 'next/image'

interface Home {
  src: string,
  name: string,
  founded: string,
  stadium: string,
  coach: string,
  country: string,
  city: string,
  league: string
}

interface PageProps {
  props: Home[]
}

export default function Home(): PageProps {
  const info = [
    {'src': `monaco`, 'name': 'Association Sportive de Monaco', 'founded': '1924', 'stadium': 'Louis II Stadium', 'coach': 'Philippe Clement', 'country':'Monaco', 'city': 'Monaco', 'league':'Ligue 1'},
    {'src': `az`, 'name': 'AZ Alkmaar FC', 'founded': '1967', 'stadium': 'AFAS stadium', 'coach': 'Pascal Jansen', 'country':'Netherlands', 'city': 'Alkmaar', 'league':'Eredivisie'},
    {'src': `liverpool`, 'name': 'Liverpool Football Club', 'founded': '1892', 'stadium': 'Anfield', 'coach': 'Jürgen Klopp', 'country':'UK', 'city': 'Liverpool', 'league':'Premier League'},
    {'src': `rma`, 'name': 'Real Madrid Club de Fútbol', 'founded': '1902', 'stadium': 'Santiago Bernabéu Stadium', 'coach': 'Carlo Ancelotti', 'country':'Spain', 'city': 'Madrid', 'league':'LaLiga'},
    {'src': `inter`, 'name': 'Football Club Internazionale', 'founded': '1908', 'stadium': 'Giuseppe Meazza Stadium', 'coach': 'Simone Inzaghi', 'country':'Italy', 'city': 'Milan', 'league':'Serie A'},
    {'src': `ajax`, 'name': 'Amsterdamsche Football Club Ajax', 'founded': '1900', 'stadium': 'Stadiums of AFC Ajax', 'coach': 'Alfred Schreuder', 'country':'Netherlands', 'city': 'Amsterdam', 'league':'Eredivisie'},
    {'src': `psg`, 'name': 'Paris Saint-Germain Football Club', 'founded': '1970', 'stadium': 'Parc des Princes', 'coach': 'Christophe Galtier', 'country':'France', 'city': 'Paris', 'league':'Ligue 1'},
    {'src': `acm`, 'name': 'Associazione Calcio Milan', 'founded': '1899', 'stadium': 'San Siro Stadium', 'coach': 'Stefano Pioli', 'country':'Italy', 'city': 'Milan', 'league':'Serie A'},
    {'src': `city`, 'name': 'Manchester City Football Club', 'founded': '1880', 'stadium': 'Etihad Stadium', 'coach': 'Pep Guardiola', 'country':'UK', 'city': 'Manchester', 'league':'Premier League'},
    {'src': `atletico`, 'name': 'Atletico Madrid', 'founded': '1903', 'stadium': 'Metropolitano Stadium', 'coach': 'Diego Simeone', 'country':'Spain', 'city': 'Madrid', 'league':'LaLiga'},
    {'src': `juventus`, 'name': 'Juventus Football Club', 'founded': '1897', 'stadium': 'Allianz Stadium', 'coach': ' Massimiliano Allegri', 'country':'Italy', 'city': 'Turin', 'league':'Serie A'},
    {'src': `barcelona`, 'name': 'Futbol Club Barcelona', 'founded': '1899', 'stadium': 'Camp Nou', 'coach': 'Xavi', 'country':'Spain', 'city': 'Barcelona', 'league':'LaLiga'},
    {'src': `manutd`, 'name': 'Manchester United Football Club', 'founded': '1878', 'stadium': 'Old Trafford', 'coach': 'Erik ten Hag', 'country':'UK', 'city': 'Manchester', 'league':'Premier League'},
    {'src': `psv`, 'name': 'PSV Eindhoven', 'founded': '1956', 'stadium': 'Philips Stadion', 'coach': 'Ruud van Nistelrooy', 'country':'Netherlands', 'city': 'Eindhoven', 'league':'Eredivisie'},
    {'src': `lille`, 'name': 'Lille Olympique Sporting Club', 'founded': '1944', 'stadium': 'Stade Pierre-Mauroy', 'coach': 'Paulo Fonseca', 'country':'France', 'city': 'lille', 'league':'Ligue 1'},
  ];

  const clubsRenderer = info.map((team) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-rose-50 my-3 mx-auto" key={team.src}>
      <div className='flex justify-center'>
        <Image width={350} height={350} className="" src = {`/${team.src}.png`} alt="logo"/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-500"> {team.name} </div>
        <ul>
          <li> <strong>Founded: </strong> {team.founded} </li>
          <li> <strong>Stadium: </strong> {team.stadium} </li>
          <li> <strong>President: </strong> {team.coach} </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mt-2">{team.country}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mt-2">{team.city}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mt-2">{team.league}</span>
      </div>
    </div>
  ))
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-violet-200'>
      {clubsRenderer}
    </div>
  )
}
