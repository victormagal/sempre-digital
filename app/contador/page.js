import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { ContactForm, MicroCard } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage
} from '../components/Foundation';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contador() {
  return (
    <main>
      <HeroPage
        arrow={false}
        cta={false}
        description="Conheça nosso programa de parceria para Contadores e aproveite as vantagens exclusivas."
        title="Programa de parceria para Contadores"
        uri="/bg-contador.jpg"
      />
      <Container newClasses="py-24">
        <div className="col-span-5 flex flex-col justify-center">
          <h1 className="font-serif font-bold text-4xl text-dark-blue">
            Simplifique sua rotina e ganhe tempo e produtividade
          </h1>
          <p className="font-sans mt-6 text-soft-gray">
            Nosso programa de parceria para contadores oferece recursos que vão
            otimizar a rotina do seu escritório. Assim você terá mais tempo para
            se dedicar aos seus clientes.
          </p>
        </div>
        <div
          className={`${styles.gradientBlue} col-span-6 col-end-13 flex flex-col justify-center p-16`}
        >
          <Image
            alt="Sempre mensalidade"
            height={18}
            quality={100}
            src="/icon-white.svg"
            width={45}
          />
          <h1 className="font-serif font-bold mt-6 text-white text-3xl">
            Ficou interessado?
          </h1>
          <p className="font-sans mt-6 text-white">
            Temos vários benefícios exclusivos para contadores parceiros. Venha
            ser um Contador Sempre Tecnologia.
          </p>
          <button
            className={`${styles.gradientYellow} font-sans font-bold mt-6 py-4 rounded text-sm text-white w-1/3`}
          >
            QUERO SER PARCEIRO
          </button>
        </div>
      </Container>
      <Container newClasses="pb-24">
        <MicroCard
          description="Você recebe todas as informações fiscais do seu cliente por meio de nossas soluções."
          imageSource="/icon-contador-1.svg"
          title="Integração contábil"
        />
        <MicroCard
          description="Conte com nosso apoio tanto para seu escritório quanto para seus clientes. Estamos #SemprePresente"
          imageSource="/icon-contador-2.svg"
          title="Atendimento diferenciado"
        />
        <MicroCard
          description="Plataforma para administrar as indicações de certificados digitais."
          imageSource="/icon-contador-3.svg"
          title="Portal Sempre Contador"
        />
        <MicroCard
          description="Emita notas fiscais eletrônicas para seus clientes e gere renda adicional para seu escritório."
          imageSource="/icon-contador-4.svg"
          title="Solução Multiempresas"
        />
        <MicroCard
          description="Gerencie a validade dos certificados digitais de seus clientes por meio do Portal Sempre Contador."
          imageSource="/icon-contador-5.svg"
          title="Certificados digitais em dia"
        />
        <MicroCard
          description="Conte com nossas soluções web e facilite a vida do seu cliente e também da sua contabilidade."
          imageSource="/icon-contador-6.svg"
          title="Soluções web"
        />
      </Container>
      <BackgroundContainer uri="/bg-contador-1.svg">
        <div className="col-span-6 col-start-4 flex flex-col items-center">
          <Image
            alt="Portal Sempre Contador"
            height={99}
            quality={100}
            src="/icon-portal-contador-ballon.svg"
            width={93}
          />
          <h1 className="font-serif font-semibold text-white text-4xl my-8">
            Portal Sempre Contador
          </h1>
          <p className="font-sans text-white mb-8">
            O Portal Sempre Contador é uma plataforma exclusiva para contadores,
            feita para administrar indicações de soluções Sempre e gerenciar a
            validade dos certificados digitais de clientes.
          </p>
          <button
            className="bg-transparent border border-white font-bold px-20 py-5 text-white rounded"
            type="button"
          >
            Cadastre-se no portal
          </button>
        </div>
      </BackgroundContainer>
      <Container newClasses="py-24">
        <div className="col-span-5">
          <h2 className="font-sans font-semibold mb-2 text-gray-600 uppercase">
            Seja um sempre parceiro
          </h2>
          <h1 className="font-sans font-bold mb-10 text-dark-blue text-5xl">
            Venha fazer parte da nossa equipe
          </h1>
          <p className="font-sans mb-10 text-gray-600 text-lg">
            Seja nosso parceiro e aproveite nossos benefícios. Deixe seus dados
            que entraremos em contato.
          </p>
          <p className="font-sans font-bold mb-4 text-gray-600 text-lg">
            Acompanhe nas redes sociais
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://www.facebook.com/sempretecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faFacebookSquare}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/sempre-tecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faLinkedin}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sempretecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faInstagram}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 col-end-13">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
