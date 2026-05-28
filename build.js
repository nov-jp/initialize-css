const lightningcss = require( 'lightningcss' );
const fs = require( 'fs' );
const path = require( 'path' );

const srcDir = path.join( __dirname, 'src' );
const distDir = path.join( __dirname, 'dist' );

// dist ディレクトリが存在しない場合は作成
if ( ! fs.existsSync( distDir ) ) {
	fs.mkdirSync( distDir, { recursive: true } );
}

// src ディレクトリ内のファイルを処理
fs.readdir( srcDir, ( err, files ) => {
	if ( err ) {
		console.error( 'Error reading src directory:', err );
		return;
	}

	files.forEach( file => {
		// CSS ファイルのみを対象とする
		if ( path.extname( file ) === '.css' ) {
			const srcPath = path.join( srcDir, file );

			// 出力用ファイルのパス（通常コピー用と min.css 用）
			const distPath = path.join( distDir, file );
			const minDistPath = path.join( distDir, file.replace( /\.css$/, '.min.css' ) );

			try {
				// 1. 元ファイルをそのまま dist にコピー
				fs.copyFileSync( srcPath, distPath );

				// 2. lightningcss でコンパイルと minify を実行
				let { code, map } = lightningcss.bundle( {
					filename: srcPath,
					minify: true,
					sourceMap: false
				} );

				// 3. 圧縮されたコードを .min.css として書き出し
				fs.writeFileSync( minDistPath, code );

				console.log( `Processed: ${ file } -> dist/${ file } & dist/${ file.replace( /\.css$/, '.min.css' ) }`);
			} catch ( err ) {
				console.error( `Error processing ${ file }:`, err );
			}
		}
	} );
} );
