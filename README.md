# ⚔️ POKEDEX SAVAŞI

Rastgele oluşturulan iki Pokémon takımını karşılaştıran, skor hesaplayan ve kazananı ilan eden eğlenceli bir React web uygulamasıdır. Her savaşta 8 Pokémon iki takıma rastgele bölünür; takım skorları `base_experience` toplamıyla hesaplanır ve kazanan belirlenir.

---

## 🛠️ Kullanılan Teknolojiler

- React 19
- Vite 7
- Tailwind CSS v4
- JavaScript (ESM)
- PokeAPI Sprites (GitHub CDN)

---

## ⭐ Özellikler

- 🎲 **Rastgele Takım Oluşturma** – 8 Pokémon her savaşta iki takıma (Kırmızı / Mavi) rastgele dağıtılır
- ⚔️ **Yeni Savaş Butonu** – Sayfa yenilenmeden `battleKey` + `useMemo` mekanizmasıyla takımlar yeniden karıştırılır
- 🏆 **Skor Hesaplama** – Her takımın toplam `base_experience` puanı hesaplanarak kazanan ilan edilir
- 🤝 **Beraberlik Desteği** – İki takım eşit puana sahipse beraberlik ekranda gösterilir
- 🖼️ **Pokémon Görselleri** – PokeAPI'nin resmi sprite deposundan dinamik olarak çekilen görsel kartlar
- 🏷️ **Tür Rozetleri** – Her Pokémon'un türüne göre renk kodlu rozet (ateş → kırmızı, su → mavi, vb.)
- 📱 **Responsive Tasarım** – Mobil için tek sütun, masaüstü için yan yana iki sütunlu takım görünümü

---

