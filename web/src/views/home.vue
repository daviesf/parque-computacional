<template>
  <section class="home-section">
    <div class="text">Bem-vindo {user}</div>

    <div class="ui huge header text-home">Últimas Notícias</div>
    <div class="ui link cards card-container">
      <div class="card">
        <div class="image">
          <img src="../assets/media/unicamp-fca.png" />
        </div>
        <div class="content">
          <div class="header">Matt Giampietro</div>
          <div class="meta">
            <a>Friends</a>
          </div>
          <div class="description">Matthew is an interior designer living in New York.</div>
        </div>
        <div class="extra content">
          <span class="right floated"> Joined in 2013 </span>
          <span>
            <i class="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="../assets/media/unicamp-fca.png" />
        </div>
        <div class="content">
          <div class="header">Molly</div>
          <div class="meta">
            <span class="date">Coworker</span>
          </div>
          <div class="description">Molly is a personal assistant living in Paris.</div>
        </div>
        <div class="extra content">
          <span class="right floated"> Joined in 2011 </span>
          <span>
            <i class="user icon"></i>
            35 Friends
          </span>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="../assets/media/unicamp-fca.png" />
        </div>
        <div class="content">
          <div class="header">Elyse</div>
          <div class="meta">
            <a>Coworker</a>
          </div>
          <div class="description">Elyse is a copywriter working in New York.</div>
        </div>
        <div class="extra content">
          <span class="right floated"> Joined in 2014 </span>
          <span>
            <i class="user icon"></i>
            151 Friends
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
}
</script>

<style src="../assets/pages.css"></style>
