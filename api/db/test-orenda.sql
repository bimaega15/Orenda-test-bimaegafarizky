PGDMP     ;    $    	            {            test-orenda    11.17    11.17                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            !           1262    135197    test-orenda    DATABASE     �   CREATE DATABASE "test-orenda" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "test-orenda";
             postgres    false            �            1259    135198    customer    TABLE     �   CREATE TABLE public.customer (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    phone character(30) NOT NULL,
    email character varying(150) NOT NULL,
    address text
);
    DROP TABLE public.customer;
       public         postgres    false            �            1259    135206    customer_id_seq    SEQUENCE     �   ALTER TABLE public.customer ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.customer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    196            �            1259    135221    order    TABLE     .  CREATE TABLE public."order" (
    id integer NOT NULL,
    noinvoice character varying(150) NOT NULL,
    datetransaction timestamp without time zone NOT NULL,
    total real NOT NULL,
    discount real,
    typediscount character varying(100),
    customer_id integer NOT NULL,
    finaltotal real
);
    DROP TABLE public."order";
       public         postgres    false            �            1259    135219    order_id_seq    SEQUENCE     �   ALTER TABLE public."order" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    201            �            1259    135228    orderdetail    TABLE     �   CREATE TABLE public.orderdetail (
    id integer NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    qty integer NOT NULL,
    discount real,
    typediscount character varying(150)
);
    DROP TABLE public.orderdetail;
       public         postgres    false            �            1259    135226    orderdetail_id_seq    SEQUENCE     �   ALTER TABLE public.orderdetail ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.orderdetail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    203            �            1259    135210    product    TABLE     �   CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    unit character varying(200) NOT NULL,
    price real NOT NULL
);
    DROP TABLE public.product;
       public         postgres    false            �            1259    135208    product_id_seq    SEQUENCE     �   ALTER TABLE public.product ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    199                      0    135198    customer 
   TABLE DATA               C   COPY public.customer (id, name, phone, email, address) FROM stdin;
    public       postgres    false    196   �                 0    135221    order 
   TABLE DATA               y   COPY public."order" (id, noinvoice, datetransaction, total, discount, typediscount, customer_id, finaltotal) FROM stdin;
    public       postgres    false    201   �                 0    135228    orderdetail 
   TABLE DATA               \   COPY public.orderdetail (id, order_id, product_id, qty, discount, typediscount) FROM stdin;
    public       postgres    false    203                     0    135210    product 
   TABLE DATA               8   COPY public.product (id, name, unit, price) FROM stdin;
    public       postgres    false    199   h        "           0    0    customer_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.customer_id_seq', 6, true);
            public       postgres    false    197            #           0    0    order_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.order_id_seq', 21, true);
            public       postgres    false    200            $           0    0    orderdetail_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.orderdetail_id_seq', 19, true);
            public       postgres    false    202            %           0    0    product_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.product_id_seq', 3, true);
            public       postgres    false    198            �
           2606    135202    customer customer_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.customer DROP CONSTRAINT customer_pkey;
       public         postgres    false    196            �
           2606    135225    order order_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_pkey;
       public         postgres    false    201            �
           2606    135232    orderdetail orderdetail_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.orderdetail
    ADD CONSTRAINT orderdetail_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.orderdetail DROP CONSTRAINT orderdetail_pkey;
       public         postgres    false    203            �
           2606    135214    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public         postgres    false    199            �
           2606    135233    order order_customer_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id) ON UPDATE CASCADE ON DELETE CASCADE;
 H   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_customer_id_fkey;
       public       postgres    false    201    2705    196            �
           2606    135238 %   orderdetail orderdetail_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderdetail
    ADD CONSTRAINT orderdetail_order_id_fkey FOREIGN KEY (order_id) REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.orderdetail DROP CONSTRAINT orderdetail_order_id_fkey;
       public       postgres    false    2709    201    203            �
           2606    135243 '   orderdetail orderdetail_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orderdetail
    ADD CONSTRAINT orderdetail_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.orderdetail DROP CONSTRAINT orderdetail_product_id_fkey;
       public       postgres    false    203    2707    199               �   x���A�0����=)Si�;C���k���DW����'��k��jrHV."O}N�j�#��8��;s^��׻7���%C�����$z���`QB"˭gP�hm�j\@���y�R����pϩ�y�����رB<m/I�         d   x�3�����72��F�FFƺƺ�F
��V�Vf��`�i
"��s3�s89-A|.#C��F�FƦ@C��	�)�FV�f@1�)(�BD�b���� ~�g         H   x�3�4��4�4��".s׈Ӕ�����3/?73/1��Ђ�ȐM9R��S�@��*���Jc���� ���         *   x�3�t)J-.�,H.�425 .C����T���X(F��� ��
-     