PGDMP  :                    |           new_relic_customers    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16408    new_relic_customers    DATABASE     �   CREATE DATABASE new_relic_customers WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 #   DROP DATABASE new_relic_customers;
                postgres    false            �            1259    16417 	   customers    TABLE     �   CREATE TABLE public.customers (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    company character varying(100) NOT NULL
);
    DROP TABLE public.customers;
       public         heap    postgres    false            �            1259    16416    customers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.customers_id_seq;
       public          postgres    false    216            �           0    0    customers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
          public          postgres    false    215            P           2604    16420    customers id    DEFAULT     l   ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
 ;   ALTER TABLE public.customers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16417 	   customers 
   TABLE DATA           G   COPY public.customers (id, first_name, last_name, company) FROM stdin;
    public          postgres    false    216          �           0    0    customers_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.customers_id_seq', 100, true);
          public          postgres    false    215            R           2606    16422    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    216            �   �  x�5VɎ�(<�����QW�~d1�Y��6����d�����\��4*�����e����?�(�Iq�$P�#�_�
8�1���!�7�"e¹�Q�<�/pǡt)��k����~���C����<!�R9��tC���_����rH�2Me7~�7=0Y�S5Z�|�._(iy�N	�ڞ&r�
c�=����\������e�S��\��Z%��B]d���/<�V@��M&/w�-���`Ƚ�s"rI	�,�$��yb�Ԯ�Q*d�|t�� �L;���ś��\�X��V76�n���JD����Wg�I��A窰�0�u��D�!�&!-�Ğ����*2��k�p��!Y�9��冔��M�ȷ.i��t�<�g�\��$^�S8ۙ��<�Р<+W�?���E�8�}ò�����2���&���9��l#�A�F����d�J>�6D�p���>g�NF�wñw�։I/�a��}�<r�!����FN�O�\��]Sr�}@������5��נ�HǦr�'�H���x�	O�M��/����8ڢ�����h�EӎM$�t��uי�b�&\Cqe"�beD?�#xm��n߰�rZw��!����J��ɒk�ى��ͩo7,j���IϬىܡՖ;BʺRJl��CY���E�h_�����92���Q��f�}#��
��m����l���ˮO�q�1/z�s���g,-o	Vny6���#Y 3��%3�s��Z���NEx4�ܯPY�a��B�N����9�s��I_v���l5Fm�¹��
��*�@az�����*&�����7����]�~@y�;�ږ�����Y�B֧�4vǧCāv�E�YP��qn����/ԙ�\g���k�o�.�A�T���M��y\��~P�X+�ק^?�P'n����#��A�L䎅��b��H���!��z��P�:�'�Į~���_:tJ��>�5Ci��T��L���i��YwD��ȓ����ISO���ڙ�'ub��xY��#5�p"�H�6����4'�h"W�jKC��rK8��7PkP�խ�{�l}��IY0#P��IY�L����A�?�BX)ǲ�s����R�i�P�ا�/h�R��װ��L�<�Xt�,l�������8���aU5�ΧQ禯��!��:x�qO9f��6�>x]��>�im���|N��7�6�F���7Ux�a��t`��1����%����
���������`���k�ճ�̮z�%;��Bh��˼P�ިmS�fN���1Uxa+����3 D��}�d��W<�ą37�~S8�S>�z$��$?�{_��F��F��9���:�ط�{��B�̽�?~;��lgt�$��A��^�6c�;���{?�e��+[��n��;����։��<�g�7:ӕ���ư4��D�$j*	i�A���<����ϟ?�Mc�     