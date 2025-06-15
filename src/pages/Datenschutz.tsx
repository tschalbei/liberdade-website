import { colors } from '../lib/colors';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(58, 124, 165, 0.133), rgba(108, 99, 255, 0.2))'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{ 
            opacity: 0.5
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text.dark }}>
              Datenschutzerklärung
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.dark }}>1. Datenschutz auf einen Blick</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Allgemeine Hinweise</h3>
                  <p className="text-gray-600">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p className="text-gray-600">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-gray-600">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                    Daten handeln, die Sie in ein Kontaktformular eingeben.
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
                    Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Wofür nutzen wir Ihre Daten?</h3>
                  <p className="text-gray-600">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                    Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge
                    geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote,
                    Bestellungen oder sonstige Auftragsanfragen verarbeitet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                  <p className="text-gray-600">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                    Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Analyse-Tools und Tools von Drittanbietern</h3>
                  <p className="text-gray-600">
                    Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
                    allem mit sogenannten Analyseprogrammen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>2. Allgemeine Hinweise und Pflichtinformationen</h3>
                  <p className="text-gray-600">
                    Datenschutz
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung.
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                    und zu welchem Zweck das geschieht.
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-gray-600">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    Christian Sailer
                    Schöffengasse 21
                    41751 Viersen
                    Telefon: [Telefonnummer der verantwortlichen Stelle]
                    E-Mail: info@liberdade.ai
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                    die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                    entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Speicherdauer</h3>
                  <p className="text-gray-600">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                    Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                    berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                    werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                  <p className="text-gray-600">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                    nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                    personenbezener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                    49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                    Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                    auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                    Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                    Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                    zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
                    Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                    DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                    Absätzen dieser Datenschutzerklärung informiert.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Empfänger von personenbezogenen Daten</h3>
                  <p className="text-gray-600">
                    Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
                    ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
                    Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                    Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
                    an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
                    haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
                    Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
                    Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
                    gemeinsame Verarbeitung geschlossen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-gray-600">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                    bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                  <p className="text-gray-600">
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                    PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                    ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                    WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
                    SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                    NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
                    SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                    EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                    VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                    NACH ART. 21 ABS. 2 DSGVO).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-gray-600">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                    oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Recht auf Datenübertragbarkeit</h3>
                  <p className="text-gray-600">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                    aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                    verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Auskunft, Berichtigung und Löschung</h3>
                  <p className="text-gray-600">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                    zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>Recht auf Einschränkung der Verarbeitung</h3>
                  <p className="text-gray-600">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                    folgenden Fällen:
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                    in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                    statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                    Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                    Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                    Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                    überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                    zu verlangen.
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                    ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                    Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                    eines Mitgliedstaats verarbeitet werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.text.dark }}>SSL- bzw. TLS-Verschlüsselung</h3>
                  <p className="text-gray-600">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                    Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-
                    Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                    „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
                    von Dritten mitgelesen werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section 
        className="py-16"
        style={{
          background: 'linear-gradient(135deg, rgb(58, 124, 165), rgb(108, 99, 255))'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" style={{ opacity: 1, transform: 'none' }}>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Bereit, mit uns zusammenzuarbeiten?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihre KI-Projekte.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 rounded-md shadow-lg bg-white hover:bg-gray-100 transition-all"
                style={{ color: 'rgb(58, 124, 165)' }}
              >
                Kontakt aufnehmen
              </Link>
              <Link 
                to="/appointment" 
                className="px-8 py-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid white'
                }}
              >
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
