const rincianDREAD = {
    damagePotential: {
        1: "Kerusakan sangat kecil, hampir tidak ada dampak.",
        2: "Kerusakan kecil, bisa mempengaruhi beberapa pengguna.",
        3: "Kerusakan sedang, mempengaruhi sejumlah pengguna, tetapi dapat diperbaiki dengan mudah.",
        4: "Kerusakan cukup besar, dapat menyebabkan gangguan pada layanan.",
        5: "Kerusakan besar, dampaknya dapat dirasakan oleh sebagian besar pengguna.",
        6: "Kerusakan signifikan, mempengaruhi operasi bisnis secara keseluruhan.",
        7: "Kerusakan sangat signifikan, dapat menyebabkan kerugian finansial yang besar.",
        8: "Kerusakan sangat serius, berpotensi menyebabkan kebangkrutan.",
        9: "Kerusakan kritis, dapat menghancurkan reputasi perusahaan.",
        10: "Kerusakan total, perusahaan mungkin tidak dapat bertahan.",
    },
    reproducibility: {
        1: "Sangat sulit untuk diulang, memerlukan kondisi khusus.",
        2: "Sulit diulang, memerlukan pengetahuan teknis yang tinggi.",
        3: "Relatif sulit untuk diulang, tetapi bisa dilakukan dengan usaha yang cukup.",
        4: "Dapat diulang dengan usaha moderat.",
        5: "Mudah diulang dengan sedikit usaha.",
        6: "Cukup mudah untuk diulang, hanya memerlukan pengetahuan dasar.",
        7: "Mudah diulang, cukup dengan langkah-langkah yang sederhana.",
        8: "Sangat mudah untuk diulang, bisa dilakukan oleh orang awam.",
        9: "Sangat mudah, memerlukan hanya satu langkah.",
        10: "Dapat diulang tanpa batas, otomatis dan tidak memerlukan intervensi manusia.",
    },
    exploitability: {
        1: "Sangat sulit untuk mengeksploitasi, memerlukan akses ke sistem yang sangat terbatas.",
        2: "Sulit untuk mengeksploitasi, memerlukan alat khusus.",
        3: "Relatif sulit, tetapi masih mungkin dengan pengetahuan yang tepat.",
        4: "Dapat dieksploitasi dengan usaha moderat.",
        5: "Cukup mudah untuk mengeksploitasi, memerlukan sedikit keahlian.",
        6: "Cukup mudah untuk dieksploitasi, hanya memerlukan alat umum.",
        7: "Mudah untuk mengeksploitasi, banyak panduan tersedia.",
        8: "Sangat mudah untuk mengeksploitasi, cukup dengan beberapa klik.",
        9: "Sangat mudah, memerlukan hanya pengetahuan dasar tentang sistem.",
        10: "Sangat mudah, eksploitasi dapat dilakukan secara otomatis tanpa keterlibatan manusia.",
    },
    affectedUsers: {
        1: "Hanya mempengaruhi satu pengguna.",
        2: "Mempengaruhi beberapa pengguna, tetapi tidak signifikan.",
        3: "Mempengaruhi sejumlah kecil pengguna.",
        4: "Mempengaruhi sejumlah pengguna, tetapi tidak lebih dari 25%.",
        5: "Mempengaruhi sekitar 50% pengguna.",
        6: "Mempengaruhi lebih dari 50% pengguna.",
        7: "Mempengaruhi sebagian besar pengguna, tetapi tidak semua.",
        8: "Mempengaruhi hampir semua pengguna.",
        9: "Hampir semua pengguna terpengaruh.",
        10: "Semua pengguna terpengaruh, tidak ada yang terhindar.",
    },
    discoverability: {
        1: "Sangat sulit untuk menemukan, memerlukan pengetahuan mendalam.",
        2: "Sulit ditemukan, hanya diketahui oleh sedikit orang.",
        3: "Relatif sulit, tetapi informasi dapat ditemukan dengan usaha yang tepat.",
        4: "Dapat ditemukan dengan usaha moderat.",
        5: "Cukup mudah untuk ditemukan, ada beberapa sumber informasi.",
        6: "Mudah untuk ditemukan, informasi tersedia di banyak tempat.",
        7: "Sangat mudah untuk ditemukan, informasi dapat diakses dengan cepat.",
        8: "Sangat mudah, informasi dapat ditemukan dalam hitungan detik.",
        9: "Hampir semua orang dapat menemukan informasi ini dengan mudah.",
        10: "Informasi sangat mudah diakses, tersedia secara publik tanpa batasan.",
    }
};

function tampilkanIdentifikasi() {
    const aset = document.getElementById('aset').value;
    const hasil = document.getElementById('hasil');
    const logOutput = document.getElementById('logOutput');

    // Simulasi ancaman
    let ancaman;
    if (aset === 'server') {
        ancaman = {
            name: "Tampering pada Server",
            damagePotential: 8,
            reproducibility: 6,
            exploitability: 5,
            affectedUsers: 7,
            discoverability: 6,
        };
    } else if (aset === 'database') {
        ancaman = {
            name: "Information Disclosure pada Database",
            damagePotential: 9,
            reproducibility: 5,
            exploitability: 7,
            affectedUsers: 9,
            discoverability: 8,
        };
    } else if (aset === 'pengguna') {
        ancaman = {
            name: "Data Breach pada Data Pengguna",
            damagePotential: 10,
            reproducibility: 4,
            exploitability: 6,
            affectedUsers: 10,
            discoverability: 7,
        };
    } else {
        ancaman = {
            name: "Serangan pada API",
            damagePotential: 7,
            reproducibility: 5,
            exploitability: 6,
            affectedUsers: 8,
            discoverability: 7,
        };
    }

    const totalSkor = ancaman.damagePotential + ancaman.reproducibility + ancaman.exploitability + ancaman.affectedUsers + ancaman.discoverability;

    let output = `<h2>Identifikasi Ancaman untuk ${aset.charAt(0).toUpperCase() + aset.slice(1)}</h2>`;
    output += `<p><strong>Nama Ancaman:</strong> ${ancaman.name}</p>`;
    output += `<p><strong>Total Skor DREAD:</strong> ${totalSkor}</p>`;

    // Menentukan prioritas mitigasi risiko
    let prioritas;
    if (totalSkor >= 40) {
        prioritas = "Prioritas Tinggi";
    } else if (totalSkor >= 30) {
        prioritas = "Prioritas Sedang";
    } else {
        prioritas = "Prioritas Rendah";
    }
    output += `<p><strong>Prioritas Mitigasi Risiko:</strong> ${prioritas}</p>`;

    output += `<h3>Rincian DREAD:</h3>`;
    output += `<ul>`;
    output += `<li><strong>Damage Potential:</strong> ${ancaman.damagePotential} - ${rincianDREAD.damagePotential[ancaman.damagePotential]}</li>`;
    output += `<li><strong>Reproducibility:</strong> ${ancaman.reproducibility} - ${rincianDREAD.reproducibility[ancaman.reproducibility]}</li>`;
    output += `<li><strong>Exploitability:</strong> ${ancaman.exploitability} - ${rincianDREAD.exploitability[ancaman.exploitability]}</li>`;
    output += `<li><strong>Affected Users:</strong> ${ancaman.affectedUsers} - ${rincianDREAD.affectedUsers[ancaman.affectedUsers]}</li>`;
    output += `<li><strong>Discoverability:</strong> ${ancaman.discoverability} - ${rincianDREAD.discoverability[ancaman.discoverability]}</li>`;
    output += `</ul>`;

    hasil.innerHTML = output;

    // Menampilkan log output ke dalam elemen HTML
    const logMessages = [
        `Identifikasi Ancaman: ${ancaman.name}`,
        `Total Skor DREAD: ${totalSkor}`,
        `Prioritas Mitigasi Risiko: ${prioritas}`,
    ];
    logOutput.innerHTML = logMessages.map(msg => `<p>${msg}</p>`).join('');

    // Kode untuk menampilkan grafik
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Damage Potential', 'Reproducibility', 'Exploitability', 'Affected Users', 'Discoverability'],
            datasets: [{
                label: 'Skor DREAD',
                data: [
                    ancaman.damagePotential,
                    ancaman.reproducibility,
                    ancaman.exploitability,
                    ancaman.affectedUsers,
                    ancaman.discoverability
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
