import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [comments, setComments] = useState([]);
  const [punchlines, setPunchlines] = useState([]);
  const [readerLetters, setReaderLetters] = useState('');

  // Gestion des onglets
  const handleTabChange = (tab) => setActiveTab(tab);

  // Soumission de commentaires
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, newComment]);
    e.target.comment.value = '';
  };

  // Soumission de punchlines
  const handlePunchlineSubmit = (e) => {
    e.preventDefault();
    const newPunchline = e.target.punchline.value;
    setPunchlines([...punchlines, newPunchline]);
    e.target.punchline.value = '';
  };

  // Soumission de courrier des lecteurs
  const handleReaderLetterSubmit = (e) => {
    e.preventDefault();
    setReaderLetters(e.target.letter.value);
    alert('Merci pour votre lettre ! Elle sera publiée prochainement.');
    e.target.letter.value = '';
  };

  return (
    <div className="container">
      {/* En-tête */}
      <header>
        <h1>Démocratie en Danger</h1>
        <p>Dévoiler les Menaces et Défendre les Libertés</p>
        <nav>
          <button className={activeTab === 'introduction' ? 'active' : ''} onClick={() => handleTabChange('introduction')}>Introduction</button>
          <button className={activeTab === 'videos' ? 'active' : ''} onClick={() => handleTabChange('videos')}>Vidéos</button>
          <button className={activeTab === 'resources' ? 'active' : ''} onClick={() => handleTabChange('resources')}>Ressources</button>
          <button className={activeTab === 'events' ? 'active' : ''} onClick={() => handleTabChange('events')}>Événements</button>
          <button className={activeTab === 'blog' ? 'active' : ''} onClick={() => handleTabChange('blog')}>Blog</button>
          <button className={activeTab === 'engage' ? 'active' : ''} onClick={() => handleTabChange('engage')}>Engagez-vous</button>
        </nav>
      </header>

      {/* Image/Vidéo d’introduction */}
      <div className="welcome-image">
        <img
          src="https://via.placeholder.com/800x300?text=Démocratie+en+Action"
          alt="Démocratie en Action"
          onClick={() => alert('Explorez les menaces contre la démocratie et rejoignez la lutte pour la protéger.')}
        />
      </div>

      {/* Contenu principal */}
      <div className="content">
        {activeTab === 'introduction' && (
          <div>
            <h2>Introduction : Menaces contre la Démocratie</h2>
            <p>
              La démocratie est menacée de toute part. Les menaces contre la démocratie ne s’arrêtent pas à la désinformation et l’influence. Elles ne s’arrêtent pas à la destruction des repères avec la déconstruction des bases de la société à travers l’instauration de la post-vérité et à la déconstruction des individus attaqués dans leur identité. Elles ne s’arrêtent pas à la déstabilisation à travers l’utilisation des réseaux sociaux, la radicalisation du débat public ou la manipulation numérique des élections. Elles ne s’arrêtent pas à l’affaiblissement des institutions nationales et internationales, au recul de l’intérêt général face aux intérêts particuliers, au discrédit des politiques.<br /><br />
              Aujourd’hui, les menaces sont politiques, économiques, mais surtout militaires. Un certain nombre d’irresponsables mondiaux ont déclaré la guerre à la démocratie pour se partager le monde.<br /><br />
              Il est indispensable de revenir aux sources de la démocratie pour la défendre et la protéger. Il est nécessaire de montrer l’importance de la liberté tant pour garantir l’état de droit, assurer le développement économique que pour faire face aux enjeux climatiques, éducatifs, sanitaires, mais aussi de sécurité et de sûreté.
            </p>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <h2>Vidéos</h2>
            <h3>Vidéo d’introduction</h3>
            <p>Insérez ici une vidéo YouTube ou autre (exemple : iframe).</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Remplacez par une vraie vidéo
              title="Vidéo d’introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <h3>Visioconférences en direct et en replay</h3>
            <p>Liste des visioconférences (thématiques : actualité, historique, fond) :</p>
            <ul>
              <li><a href="#">Conférence sur la Russie par Françoise Thom (Replay)</a></li>
              <li><a href="#">Débat live sur l’Ukraine avec Jean Sylvestre Montgrenier</a></li>
            </ul>

            <h3>Liens vers des vidéos existantes</h3>
            <p>Liens vers YouTube, TikTok, Facebook, etc. :</p>
            <ul>
              <li><a href="https://www.youtube.com" target="_blank">Analyse de Rudy Reichstadt sur la désinformation</a></li>
              <li><a href="https://www.tiktok.com" target="_blank">Clip sur les menaces militaires</a></li>
            </ul>
          </div>
        )}

        {activeTab === 'resources' && (
          <div>
            <h2>Ressources</h2>
            <h3>Bibliographie</h3>
            <ul>
              <li>*L’opium des imbéciles* – Rudy Reichstadt (Grasset, 2019)</li>
              <li>*Comprendre le poutinisme* – Françoise Thom (Desclée De Brouwer, 2018)</li>
              <li><a href="https://desk-russie.eu/" target="_blank">Desk Russie</a> – Ressources sur la Russie</li>
            </ul>

            <h3>Capsules de présentation</h3>
            <p>Présentations de livres, films, reportages :</p>
            <ul>
              <li>Extrait d’interview de Françoise Thom sur *Géopolitique de la Russie*</li>
              <li>Clip d’un reportage sur l’Ukraine</li>
            </ul>

            <h3>MOOCs</h3>
            <p>Cours en ligne sur la démocratie et la géopolitique :</p>
            <ul>
              <li><a href="https://www.coursera.org" target="_blank">MOOC sur la désinformation</a></li>
            </ul>
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <h2>Événements</h2>
            <p>Agenda des conférences internes et externes :</p>
            <ul>
              <li>15/03/2025 – Conférence sur la Russie avec Françoise Thom</li>
              <li>20/03/2025 – Débat live sur l’Ukraine (inscription)</li>
              <li>Replay : Visite passée avec Cécile Vaissié</li>
            </ul>
          </div>
        )}

        {activeTab === 'blog' && (
          <div>
            <h2>Blog "Veille Démocratique"</h2>
            <p>Articles hebdomadaires sur les menaces à la démocratie :</p>
            <ul>
              <li><a href="#">Menaces militaires : Analyse de Poutine – 10/02/2025</a></li>
              <li><a href="#">Désinformation en 2025 : Le rôle des réseaux sociaux</a></li>
            </ul>
          </div>
        )}

        {activeTab === 'engage' && (
          <div>
            <h2>Engagez-vous</h2>
            <h3>Commentaires</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea name="comment" placeholder="Votre commentaire" required />
              <button type="submit">Publier</button>
            </form>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>

            <h3>Punchlines</h3>
            <form onSubmit={handlePunchlineSubmit}>
              <textarea name="punchline" placeholder="Votre punchline" required />
              <button type="submit">Envoyer</button>
            </form>
            <ul>
              {punchlines.map((punchline, index) => (
                <li key={index}>{punchline}</li>
              ))}
            </ul>

            <h3>Courrier des lecteurs</h3>
            <form onSubmit={handleReaderLetterSubmit}>
              <textarea name="letter" placeholder="Votre lettre ou opinion" required />
              <button type="submit">Soumettre</button>
            </form>
            {readerLetters && <p>Votre lettre : {readerLetters}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;