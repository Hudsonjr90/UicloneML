import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

const tshirtImage =  require("../../assets/tshirt.png")

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro.
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, unde
      officiis. Minima deserunt assumenda unde voluptatibus blanditiis quam
      maiores ullam iusto accusamus nihil, voluptas necessitatibus est
      consequuntur placeat molestias ratione adipisci nostrum! Doloremque,
      maxime doloribus! Odio debitis ratione quasi sunt optio beatae temporibus
      rerum voluptatem, est itaque ullam sapiente quibusdam corrupti, veniam
      laborum pariatur quae qui vero! Soluta officiis harum dicta. Pariatur
      accusantium maxime, soluta nesciunt doloremque unde in similique vel.
      Inventore dignissimos quisquam sequi officia eligendi earum assumenda quas
      odit, nesciunt, autem nisi a natus voluptatibus necessitatibus. Obcaecati
      enim blanditiis nulla ducimus repudiandae, cumque perferendis minima.
      Itaque mollitia corporis impedit dicta accusamus enim possimus maiores
      qui, commodi, vero temporibus esse adipisci quae nihil inventore, animi
      rem facere libero corrupti quis velit quidem? Quam saepe voluptas hic
      explicabo nihil alias cupiditate mollitia repellendus eius natus. Quidem
      ut minus, distinctio corrupti, quod cumque tempora quibusdam aliquid
      fugiat velit animi? Accusantium, pariatur. Earum consectetur adipisci
      libero aperiam suscipit nihil, eligendi enim eum, omnis quod quas officia
      corrupti veritatis nulla tenetur animi ipsa maxime numquam amet autem
      laudantium obcaecati. Blanditiis voluptates illum expedita optio. Ipsam,
      corporis nesciunt voluptatem pariatur cumque quibusdam optio esse
      cupiditate? Ipsam est quas tempora non provident delectus ratione magni.
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam
      maxime eligendi. Repudiandae, obcaecati. Facere illum quia tempore, nisi
      quam necessitatibus quibusdam aspernatur? Ab nemo commodi earum deleniti
      illo, blanditiis quod numquam, voluptatem tenetur aspernatur eveniet fugit
      eligendi voluptatibus minima laudantium asperiores non maxime doloribus
      sint sequi sunt. Odio officiis corrupti modi quo ea unde sequi sed et,
      repudiandae debitis possimus ipsa deserunt explicabo fugit. Commodi omnis
      suscipit ab numquam placeat voluptatum eveniet ipsum nemo in et vitae quos
      exercitationem excepturi, sit laborum nesciunt porro quod, ea perspiciatis
      eos dignissimos dolores. Saepe tenetur dolores repellendus aliquam
      sapiente asperiores dolorum maxime.
    </p>
  </Description>
);

export default Product;
